import { action, computed, makeObservable, observable } from 'mobx'
import ToDoService from '../service'

const toDoService = ToDoService.getInstance()

export class Todo {
  _id: string
  name: string
  description: string
  isDone: boolean

  constructor(item: any) {
    this._id = item._id
    this.name = item.name
    this.description = item.description
    this.isDone = item.isDone
  }
  getToDo() {
    return {
      _id: this._id,
      name: this.name,
      description: this.description,
      isDone: this.isDone,
    }
  }
}

export class TodoList {
  todos: Todo[] = []
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.isDone).length
  }
  constructor() {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      addTodo: action,
      removeTodo: action,
      editItem: action,
      setCompletedItem: action.bound,
    })
  }
  setTodosList = (data: any) => {
    return (this.todos = data)
  }
  async addTodo(name: string, description: string) {
    const requestData: any = {
      name: name,
      description: description,
      isDone: false,
    }
    await toDoService.create(requestData)
  }
  async removeTodo(_id: string) {
    await toDoService.delete(_id)
  }
  async editItem(_id: string, name: string, description: string) {
    const requestData: any = {
      name: name,
      description: description,
    }
    await toDoService.update(_id, requestData)
  }
  async setCompletedItem(_id: string) {
    const todo = await toDoService.getToDoByID(_id)
    const isDone = todo?.todo.isDone
    const requestData: any = {
      isDone: !isDone,
    }
    await toDoService.update(_id, requestData)
  }
  async getTodosList() {
    const list: any = []
    const response = await toDoService.getToDos()
    response.todos.forEach((item: any) => {
      const todo = new Todo(item)
      list.push(todo.getToDo())
    })
    this.setTodosList(list)
  }
}

export const TodoStore = new TodoList()
