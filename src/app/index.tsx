import { ChangeEvent, FC, useEffect, useState } from "react";
import Form from "../components/form";
import { ITask } from "../interfaces/index";
import ToDoService from "../service";
import AppFrame from "./styles";

const App: FC = () => {
  const toDoService = ToDoService.getInstance();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [toggleSubmit, setToggleSubmit] = useState<boolean>(true);
  const [isEditItem, setIsEditItem] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setDescription(event.target.value);
  };

  const setInputValue = (inputName: string, inputDescription: string) => {
    setName(inputName);
    setDescription(inputDescription);
  };

  const addNewTask = (): void => {
    const newTaskData: any = {
      name: name,
      description: description,
      isDone: false,
    };
    toDoService
      .create(newTaskData)
      .then((items: any) => {
        setInputValue("", "");
        setRefresh(!refresh);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const deleteTask = (taskIdToDelete: string): void => {
    toDoService
      .delete(taskIdToDelete)
      .then((items: any) => {
        if (items?.message) {
          alert("Deleted !!");
          setRefresh(!refresh);
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getEditTask = (taskIdToUpdate: string): void => {
    toDoService
      .getToDoByID(taskIdToUpdate)
      .then((items: any) => {
        setInputValue(items.todo!.name, items.todo!.description);
        setToggleSubmit(false);
        setIsEditItem(taskIdToUpdate);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const updateTask = (editItem: string): void => {
    const updateData: any = {
      name: name,
      description: description,
    };
    toDoService
      .update(editItem, updateData)
      .then((items: any) => {
        setInputValue("", "");
        setRefresh(!refresh);
        setToggleSubmit(!toggleSubmit);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const setCompletedTask = (taskIdToComplete: string): void => {
    const completedStatus: any = { isDone: true };
    toDoService
      .update(taskIdToComplete, completedStatus)
      .then((items: any) => {
        setRefresh(!refresh);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getAllTasks = () => {
    toDoService
      .getToDos()
      .then((items: any) => {
        if (items?.todos) setTodoList(items.todos);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllTasks();
  }, [refresh]);

  return (
    <AppFrame>
      <Form
        handleNameChange={handleNameChange}
        handleDescriptionChange={handleDescriptionChange}
        newTask={addNewTask}
        name={name}
        description={description}
        todoList={todoList}
        toggleSubmit={toggleSubmit}
        deleteTask={deleteTask}
        isEditItem={isEditItem}
        editTask={getEditTask}
        updateTask={updateTask}
        setCompletedTask={setCompletedTask}
      />
    </AppFrame>
  );
};

export default App;
