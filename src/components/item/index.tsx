import ListFrameItem from "./styles/list-frame-item";
import ListFrameRight from "./styles/list-frame-right";
import Button from "./styles/button";
import Edit from "../icons/edit";
import Complete from "../icons/conplete";
import Delete from "../icons/delete";
import ListFrameLeft from "./styles/list-frame-left";
import { Todo, TodoList, TodoStore } from "../../store/todoStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import Input from "../new-item/styles/input";

interface IProps {
  todo: Todo;
  todoStore: TodoList;
}
const Item = observer(({ todo, todoStore }: IProps) => {
  const [name, setName] = useState<string>(todo.name);
  const [description, setDescription] = useState<string>(todo.description);
  const [editButton, setEditButton] = useState<boolean>(false);
  const [completeButton,setCompleteButton] = useState<boolean>(false);
  const setUpdateButton = () => {
    setEditButton(!editButton);
  };
  const setCompletedButton = () => {
    setCompleteButton(!completeButton)
    todoStore.setCompletedItem(todo._id)
    console.log(todoStore.todos)
  }
  return (
    <ListFrameItem>
      <ListFrameLeft>
        {editButton === false ? (
          <>
            {" "}
            <h1>{todo.name}</h1>
            <p>{todo.description}</p>
          </>
        ) : (
          <>
            <Input
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <Input
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </>
        )}
      </ListFrameLeft>
      <ListFrameRight>
        {editButton === false ? (
          <Button onClick={setUpdateButton}>
            Edit <Edit />
          </Button>
        ) : (
          <Button
            onClick={() => {
              todoStore.editItem(todo._id, name, description);
              console.log(todoStore.todos)
              setUpdateButton();
            }}
          >
            Update <Edit />
          </Button>
        )}
        {editButton === false && (
          <Button
            onClick={() => {
              todoStore.removeTodo(todo._id);
            }}
          >
            Delete <Delete />
          </Button>
        )}
        {completeButton === false ? (
          <Button
            onClick={setCompletedButton}
          >
            Complete <Complete />
          </Button>
        ) : (
          <Button>
            <Complete />
          </Button>
        )}
      </ListFrameRight>
    </ListFrameItem>
  );
});
export default Item;
