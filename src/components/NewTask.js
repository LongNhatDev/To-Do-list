import './NewTask.css'
import React, { useState, useEffect } from 'react'
import ToDoService from '../servive'

const NewTask = (props) => {
  const [input, setInput] = useState({
    name: '',
    description: '',
  })
  const handleChange = (e) => {
    console.log(input)
    const { name, value } = e.target
    setInput((v) => ({ ...v, [name]: value }))
    if (name === 'name') props.onChangeName(e)
    else props.onChangeDescription(e)
  }
  useEffect(() => {
    console.log(props)
    const toDoService = ToDoService.getInstance()
    if (props?.editItemID) {
      toDoService
        .getToDoByID(props.editItemID)
        .then((items) => {
          if (items) {
            setInput({
              name: items.todo.name,
              description: items.todo.description,
            })
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [props.editItemID])
  const updateItemHandler = () => {
    const toDoService = ToDoService.getInstance()
    toDoService
      .update(props.editItemID, input)
      .then((items) => {
        console.log(items)
        props.setRefresh()
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <div className="NewTask-Frame">
      <div className="NewTask-Frame-supleft">
        <div className="NewTask-Frame_sub">
          <label>Name</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          ></input>
        </div>
        <div className="NewTask-Frame_sub">
          <label>Description</label>
          <input
            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="NewTask-Frame-supright">
        {props.editItemID ? (
          <>
            <button className="btn" onClick={updateItemHandler}>
              Update
            </button>
            <button className="btn" onClick={props.CancelEditView}>
              cancel
            </button>
          </>
        ) : (
          <button className="btn" onClick={props.SendDataToAPI}>
            Add Todo
          </button>
        )}
      </div>
    </div>
  )
}

export default NewTask
