import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { TodoList } from "../../store/todoStore";

import Button from "./styles/button";
import Input from "./styles/input";
import Label from "./styles/label";
import NewTaskFrame from "./styles/new-task-frame";
import NewTaskFrameSub from "./styles/new-task-frame-sub";
import NewTaskFrameSupLeft from "./styles/new-task-frame-sup_left";
import NewTaskFrameSupRight from "./styles/new-task-frame-sup_right";

interface IProps {
  todoStore: TodoList;
}
const NewItem = observer(({ todoStore }: IProps) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  
  return (
    <NewTaskFrame>
      <NewTaskFrameSupLeft>
        <NewTaskFrameSub>
          <Label>Name</Label>
          <Input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </NewTaskFrameSub>
        <NewTaskFrameSub>
          <Label>Description</Label>
          <Input
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </NewTaskFrameSub>
      </NewTaskFrameSupLeft>
      <NewTaskFrameSupRight>
        <Button
          className="btn"
          onClick={() => {
            todoStore.addTodo(name, description);
          }}
        >
          Add Todo
        </Button>
      </NewTaskFrameSupRight>
    </NewTaskFrame>
  );
});
export default NewItem;
