import ListFrameItem from "./styles/list-frame-item";
import ListFrameRight from "./styles/list-frame-right";
import Button from "./styles/button";
import Edit from "../icons/edit";
import Complete from "../icons/complete";
import Delete from "../icons/delete";
import ListFrameLeft from "./styles/list-frame-left";
import { ITask } from "../../interfaces";

interface IProps {
  task: ITask;
  deleteTask(taskIdToDelete: string): void;
  editTask(taskIdToUpdate: string): void | null;
  setCompletedTask(taskIdToComplete: string): void;
}
const Item = ({ task, editTask, deleteTask, setCompletedTask }: IProps) => {
  return (
    <ListFrameItem>
      <ListFrameLeft>
        <h1>{task?.name}</h1>
        <br />
        <h3>{task?.description}</h3>
      </ListFrameLeft>
      <ListFrameRight>
        <Button
          onClick={() => {
            editTask(task._id);
          }}
        >
          Edit <Edit />
        </Button>
        {task.isDone === false && (
          <Button
            onClick={() => {
              setCompletedTask(task._id);
            }}
          >
            Complete <Complete />
          </Button>
        )}
        <Button
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          Delete <Delete />
        </Button>
      </ListFrameRight>
    </ListFrameItem>
  );
};
export default Item;
