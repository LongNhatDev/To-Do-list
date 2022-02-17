import List from "../list-item";
import NewItem from "../new-item";
import TableDiv from "./styles";
import { Todo, TodoList, TodoStore } from "../../store/todoStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
interface IProps{
  todoStore:TodoList
}
const Form = observer(({todoStore}:IProps) => {
  return (
    <TableDiv>
      <h1>My Todos</h1>
      <NewItem todoStore={todoStore}/>
      <List todoStore = {todoStore} />
    </TableDiv>
  );
});

export default Form;
