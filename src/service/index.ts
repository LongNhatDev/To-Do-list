import CONSTANTS from '../constants'
import { Todo } from '../store/todoStore'

function setHeader() {
  const headers = {
    'Content-Type': 'application/json',
  }
  return headers
}
function joinURL(baseURL: string, url: string) {
  return `${baseURL}/${url}`
}

export default class ToDoService {
  domain: string
  constructor() {
    this.domain = CONSTANTS.DOMAIN
  }

  static myInstance: ToDoService

  static getInstance(): ToDoService {
    if (ToDoService.myInstance == null) {
      ToDoService.myInstance = new ToDoService()
    }
    return this.myInstance
  }

  request(endpoint: string, method = 'POST', data?: Todo) {
    let url = joinURL(this.domain, endpoint)
    let headers = setHeader()
    const options: any = {
      headers,
      method,
    }
    if (data) {
      options.body = JSON.stringify({ ...data })
    }
    return fetch(url, options)
  }

  async getToDos() {
    const method = 'GET'
    const endpoint = 'todos'
    return this.request(endpoint, method).then((res) => res.json())
  }
  async getToDoByID(id: string) {
    const method = 'GET'
    const endpoint = `get-todo/${id}`
    return this.request(endpoint, method).then((res) => res.json())
  }
  async update(id: string, data: Todo) {
    const method = 'PUT'
    const endpoint = `edit-todo/${id}`
    return this.request(endpoint, method, data).then((res) => res.json())
  }
  async delete(id: string) {
    const method = 'DELETE'
    const endpoint = `delete-todo/${id}`
    return this.request(endpoint, method).then((res) => res.json())
  }
  async create(data: Todo) {
    const method = 'POST'
    const endpoint = 'add-todo'
    return this.request(endpoint, method, data).then((res) => res.json())
  }
}