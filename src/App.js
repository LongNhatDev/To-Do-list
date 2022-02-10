import './App.css'
import Form from './components/form'
import NewTask from './components/NewTask'
import api from './api/contact'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ToDoService from './servive'

const App = () => {
  const [toDoList, setToDoList] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [editItem, setEditItem] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const retrieveItems = async () => {
    const toDoService = ToDoService.getInstance()
    toDoService
      .getToDos()
      .then((items) => {
        if (items?.todos) setToDoList(items.todos)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  useEffect(() => {
    retrieveItems()
  }, [refresh])

  const SendDataToAPI = async () => {
    const request = {
      name: name,
      description: description,
      isDone: isDone,
    }
    const toDoService = ToDoService.getInstance()
    toDoService
      .create(request)
      .then((items) => {
        console.log(items)
        setRefresh(!refresh)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const DeleteItem = (id) => {
    const toDoService = ToDoService.getInstance()
    toDoService
      .delete(id)
      .then((items) => {
        if (items?.message) {
          alert('Deleted !!')
          console.log(items)
          setRefresh(!refresh)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
  const ItemAction = (action, id) => {
    if (action === 'Delete') return DeleteItem(id)
    return setEditItem(id)
  }

  return (
    <div className="App">
      <NewTask
        onChangeName={onChangeName}
        onChangeDescription={onChangeDescription}
        SendDataToAPI={SendDataToAPI}
        editItemID={editItem}
        setRefresh={() => setRefresh(!refresh)}
      />
      <Form toDoList={toDoList} ItemAction={ItemAction} />
    </div>
  )
}

export default App
