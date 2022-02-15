import { ChangeEvent, FC, useState } from "react";
import Form from "../components/form";
import AppFrame from "./styles";
import { ITask } from "../interfaces/index";
import { v4 as uuidv4 } from 'uuid';

const App: FC = () => {
  const [_id,set_Id] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [toggleSubmit, setToggleSubmit] = useState<boolean>(true);
  const [isEditItem, setIsEditItem] = useState<string>("");
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setDescription(event.target.value);
  };

  const newTask = (): void => {
    const newTask = { _id: uuidv4(),name: name, description: description, isDone: false };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setName("");
    setDescription("");
  };

  const deleteTask = (taskIdToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task._id !== taskIdToDelete;
      })
    );
  };

  const editTask = (taskIdToUpdate: string): void => {
    let newEditItem = todoList.find((task) => {
      return task._id === taskIdToUpdate;
    });
    console.log(newEditItem);
    setName(newEditItem!.name);
    setDescription(newEditItem!.description);
    setToggleSubmit(false);
    setIsEditItem(taskIdToUpdate);
  };

  const updateTask = (editItem: string): void => {
    let editTask = todoList.find((task) => {
      return task._id === editItem;
    });
    editTask!.name = name;
    editTask!.description = description;
    setToggleSubmit(!toggleSubmit);
  };

  const setCompletedTask = (taskIdToComplete: string): void => {
    const completedTask = todoList.find((task) => {
      return (task._id = taskIdToComplete);
    });
    completedTask!.isDone=true    
  };

  return (
    <AppFrame>
      <Form
        handleNameChange={handleNameChange}
        handleDescriptionChange={handleDescriptionChange}
        newTask={newTask}
        name={name}
        description={description}
        todoList={todoList}
        toggleSubmit={toggleSubmit}
        deleteTask={deleteTask}
        isEditItem={isEditItem}
        editTask={editTask}
        updateTask={updateTask}
        setCompletedTask={setCompletedTask}
      />
    </AppFrame>
  );
};

export default App;
