import './App.css';
import Form from './components/form';
import NewTask from './components/NewTask';
import api from "./api/contact"
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isDone,setIsDone] = useState(false);

  // Get All Item
  const retrieveItems = async () => {
    const response = await api.get("/todos");
    console.log(response.data)
    return response.data;
  }
  // Create New Item
  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }
  

  useEffect(() => {
    const getAllItems = async () => {
      const allItems = await retrieveItems();
    if(allItems) setToDoList(allItems)
    };
    getAllItems();
  },[])

  // Retrieve Items 
  const SendDataToAPI = async () => {
    const request = {
      _id: uuidv4(),
      name: name,
      description: description,
      isDone: isDone
    }
    const response =  await api.post('/todos',request);
    console.log(response.data);
    setToDoList([...toDoList],response.data)
  };
  // Delete Items
  const RemoveItem = async (id) => {
    await api.delete(`/todos/${id}`)  
    const newToDoList = toDoList.filter((item) => {
      return item._id !== id;
    });
    setToDoList(newToDoList);
    alert("Deleted !!")
  }

  return (
    <div className="App">
      <NewTask onChangeName={onChangeName} onChangeDescription={onChangeDescription} SendDataToAPI={SendDataToAPI} />
      <Form toDoList={toDoList} RemoveItem={RemoveItem}/>
    </div>
  );
}

export default App;