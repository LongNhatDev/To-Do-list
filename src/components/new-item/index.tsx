import { ChangeEvent } from "react";
import Button from "./styles/button";
import Input from "./styles/input";
import Label from "./styles/label";
import NewTaskFrame from "./styles/new-task-frame";
import NewTaskFrameSub from "./styles/new-task-frame-sub";
import NewTaskFrameSupLeft from "./styles/new-task-frame-sup_left";
import NewTaskFrameSupRight from "./styles/new-task-frame-sup_right";

interface IProps {
  handleNameChange(event: ChangeEvent<HTMLInputElement>): void;
  handleDescriptionChange(event: ChangeEvent<HTMLInputElement>): void;
  newTask(): void;
  updateTask(editItem: string): void;
  name: string;
  description: string;
  toggleSubmit: boolean;
  isEditItem: string;
}
const NewItem = ({
  name,
  toggleSubmit,
  description,
  isEditItem,
  handleNameChange,
  handleDescriptionChange,
  newTask,
  updateTask,
}: IProps) => {
  return (
    <NewTaskFrame>
      <NewTaskFrameSupLeft>
        <NewTaskFrameSub>
          <Label>Name</Label>
          <Input
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleNameChange(event)
            }
          />
        </NewTaskFrameSub>
        <NewTaskFrameSub>
          <Label>Description</Label>
          <Input
            value={description}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleDescriptionChange(event)
            }
          />
        </NewTaskFrameSub>
      </NewTaskFrameSupLeft>
      <NewTaskFrameSupRight>
        {toggleSubmit ? (
          <Button className="btn" onClick={newTask}>
            Add Todo
          </Button>
        ) : (
          <Button
            className="btn"
            onClick={() => {
              updateTask(isEditItem);
            }}
          >
            Update
          </Button>
        )}
      </NewTaskFrameSupRight>
    </NewTaskFrame>
  );
};
export default NewItem;
