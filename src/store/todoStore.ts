import { action, computed, makeObservable, observable } from "mobx";
import { v4 as uuidv4 } from "uuid";
import ToDoService from "../service";

const toDoService = ToDoService.getInstance();

export class Todo {
  _id: string;
  name: string;
  description: string;
  isDone: boolean;
  
  constructor(name: string, description: string) {
    this._id = uuidv4();
    this.name = name;
    this.description = description;
    this.isDone = false;
  }
  getId() {}
}

export class TodoList {
  todos: Todo[] = [];
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.isDone).length;
  }
  constructor(todos: Todo[]) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      addTodo: action,
      removeTodo: action,
      editItem:action,
      setCompletedItem:action.bound
      
    });
    this.todos = todos;
  }

  addTodo(name: string, description: string) {
    this.todos.push(new Todo(name, description));
  }
  removeTodo(_id: string) {
    this.todos = this.todos.filter((item) => item._id !== _id);
    console.log(this.todos);
  }
  editItem(_id:string,name:string,description:string){
    let todo = this.todos.find(item=> item._id===_id)
    todo!.name = name
    todo!.description = description
  }
  setCompletedItem(_id:string){
    let todo = this.todos.find(item=> item._id===_id)
    todo!.isDone = true
  }
}

export const TodoStore = new TodoList([
  new Todo("TranLongNhat", "DoUI"),
  new Todo("HaHuyThong", "DoUILogic"),
  new Todo("NguyenTruongSon", "DoApiResponse"),
  new Todo("NguyenThiHaVinh", "DoApiRequest"),
]);
