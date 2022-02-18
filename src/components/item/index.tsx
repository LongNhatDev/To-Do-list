import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Todo, TodoList } from "../../store/todoStore";
import Complete from "../icons/complete";
import Delete from "../icons/delete";
import Edit from "../icons/edit";
import Input from "../new-item/styles/input";
import ButtonC from "./styles/buttonc";
import ButtonD from "./styles/buttond";
import ButtonU from "./styles/buttonu";
import ListFrameItem from "./styles/list-frame-item";
import ListFrameLeft from "./styles/list-frame-left";
import ListFrameRight from "./styles/list-frame-right";

interface IProps {
  todo: Todo;
  todoStore: TodoList;
  setRefresh(): void;
}
const Item = observer(({ todo, todoStore, setRefresh }: IProps) => {
  const [name, setName] = useState<string>(todo.name);
  const [description, setDescription] = useState<string>(todo.description);
  const [editButton, setEditButton] = useState<boolean>(false);
  const [completeButton, setCompleteButton] = useState<boolean>(todo.isDone);
  const setUpdateButton = () => {
    setEditButton(!editButton);
    setRefresh();
  };
  const setCompletedButton = () => {
    setCompleteButton(!completeButton);
    todoStore.setCompletedItem(todo._id);
    setRefresh();
  };
  const handleRemove = () => {
    todoStore.removeTodo(todo._id);
    setRefresh();
  };
  const handleUpdate = () => {
    todoStore.editItem(todo._id, name, description);
    setUpdateButton();
  };
  return (
    <ListFrameItem>

      <ListFrameLeft>
        {editButton ? (
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
        ) : (
          <>
            {" "}
            <h1>{todo.name}</h1>
            <p>{todo.description}</p>
          </>
        )}
      </ListFrameLeft>

      <ListFrameRight>
        {editButton ? (
          <ButtonU onClick={handleUpdate}>
            Update <Edit />
          </ButtonU>
        ) : (
          <ButtonU onClick={setUpdateButton}>
            Edit <Edit />
          </ButtonU>
        )}
        {!editButton && (
          <ButtonD onClick={handleRemove}>
            Delete <Delete />
          </ButtonD>
        )}
        {completeButton ? (
          <ButtonC>
            <Complete />
          </ButtonC>
        ) : (
          <ButtonC onClick={setCompletedButton}>
            Complete <Complete />
          </ButtonC>
        )}
      </ListFrameRight>
          
    </ListFrameItem>
  );
});
export default Item;
