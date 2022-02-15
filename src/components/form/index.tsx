import { ChangeEvent } from "react";
import { ITask } from "../../interfaces";
import List from "../list-item";
import NewItem from "../new-item";
import TableDiv from "./styles";

interface IProps {
  handleNameChange(event: ChangeEvent<HTMLInputElement>): void;
  handleDescriptionChange(event: ChangeEvent<HTMLInputElement>): void;
  newTask(): void;
  deleteTask(taskNameToDelete: string):void,
  editTask(taskNameToUpdate:string):void,
  updateTask(editItem:string) :void,
  setCompletedTask(taskNameToComplete:string) :void,
  isEditItem:string,
  name:string,
  description:string,
  todoList:ITask[],
  toggleSubmit:boolean
  
}
const Form = ({ toggleSubmit,name,description,todoList,isEditItem,handleNameChange, handleDescriptionChange,newTask,editTask,updateTask,deleteTask,setCompletedTask }: IProps) => {
  return (
    <TableDiv>
      <h1>My Todos</h1>
      <NewItem
        toggleSubmit= {toggleSubmit}
        handleNameChange={handleNameChange}
        handleDescriptionChange={handleDescriptionChange}
        newTask={newTask}
        updateTask={updateTask}
        name={name}
        description={description}
        isEditItem={isEditItem}
      />
      <List todoList={todoList} editTask={editTask} deleteTask={deleteTask} setCompletedTask={setCompletedTask}/>
    </TableDiv>
  );
};

export default Form;
