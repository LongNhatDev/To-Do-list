import { ITask } from "../../interfaces";
import Item from "../item";
import ListFrame from "./styles";

interface IProps {
  todoList: ITask[];
  deleteTask(taskIdToDelete: string): void;
  editTask(taskIdToUpdate: string): void;
  setCompletedTask(taskIdToComplete: string): void;
}

const List = ({ todoList, deleteTask, editTask, setCompletedTask }: IProps) => {
  return (
    <ListFrame>
      {todoList.map((task: ITask, index: number) => {
        return (
          <Item
            key={index}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            setCompletedTask={setCompletedTask}
          />
        );
      })}
    </ListFrame>
  );
};
export default List;
