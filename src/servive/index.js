import CONSTANTS from "../constants";

function setHeader() {
  const headers = {
    "Content-Type": "application/json",
  };
  return headers;
}
function joinURL(baseURL, url) {
  return `${baseURL}/${url}`;
}
export default class ToDoService {
  constructor() {
    this.domain = CONSTANTS.DOMAIN;
  }

  static myInstance = null;

  static getInstance() {
    if (ToDoService.myInstance == null) {
      ToDoService.myInstance = new ToDoService();
    }
    return this.myInstance;
  }

  request(endpoint, method = "POST", data = null) {
    let url = joinURL(this.domain, endpoint);
    let headers = setHeader();
    const options = {
      headers,
      method,
    };
    if (data) {
      options.body = JSON.stringify({ ...data });
    }
    return fetch(url, options);
  }

  async getToDos() {
    const method = "GET";
    const endpoint = "todos";
    return this.request(endpoint, method).then((res) => res.json());
  }
  async getToDoByID(id) {
    const method = "GET";
    const endpoint = `get-todo/${id}`;
    return this.request(endpoint, method).then((res) => res.json());
  }
  async update(id, data) {
    const method = "PUT";
    const endpoint = `edit-todo/${id}`;
    return this.request(endpoint, method, data).then((res) => res.json());
  }
  async delete(id) {
    const method = "DELETE";
    const endpoint = `delete-todo/${id}`;
    return this.request(endpoint, method).then((res) => res.json());
  }
  async create(data) {
    const method = "POST";
    const endpoint = "add-todo";
    return this.request(endpoint, method, data).then((res) => res.json());
  }
}
