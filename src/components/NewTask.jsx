import React, { useState, useEffect } from 'react'
import ToDoService from '../servive'
import styled from 'styled-components'

const NewTaskFrame = styled.div`
  background-color: rgb(141, 141, 141);
    width: 80%;
    border-radius: 10px;
    display:flex;
    flex-flow: row wrap;
    height: auto;
    justify-content: space-evenly;
    align-items:center;
    margin-top:20px;
    padding: 20px 0; 
`
const NewTaskFrameSupLeft = styled.div`
    flex: 4;
    display:flex;
    flex-flow: row wrap;
`
const NewTaskFrameSub = styled.div`
    display:flex;
    flex-flow: column wrap;
    align-items: flex-start;
    margin-left:50px ;
`
const Input = styled.input`
    border:1px solid rgb(255, 136, 0);
    height:35px;
    width: 250px;
    border-radius: 10px;
    margin-top:5px;
    padding-left: 4px;
`
const Label = styled.Label`
      font-size:20px;
    font-weight: bolder;
`
const NewTaskFrameSupRight = styled.div`
    flex: 1;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;

    & Button{
      width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: rgb(255, 136, 0);
    color:white;
    font-size:17px;
    font-weight:bolder;
    margin-right: 10px;
    }
`
const Button = styled.Button`
    padding: 0 8px;
    height: 35px;
    border-radius: 10px;
    font-size:17px;
    font-weight:bolder;
    margin-left: 15px;
    transition: transform .3s;

    &:hover{
      transform:scale(1.1);
    }
    &:active{
      transform:scale(0.9);
    }
`
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
    <NewTaskFrame>
      <NewTaskFrameSupLeft>
        <NewTaskFrameSub>
          <Label>Name</Label>
          <Input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          ></Input>
        </NewTaskFrameSub>
        <div className="NewTask-Frame_sub">
          <Label>Description</Label>
          <Input
            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
          ></Input>
        </div>
      </NewTaskFrameSupLeft>
      <NewTaskFrameSupRight>
        {props.editItemID ? (
          <>
            <Button className="btn" onClick={updateItemHandler}>
              Update
            </Button>
            <Button className="btn" onClick={props.CancelEditView}>
              cancel
            </Button>
          </>
        ) : (
          <Button className="btn" onClick={props.SendDataToAPI}>
            Add Todo
          </Button>
        )}
      </NewTaskFrameSupRight>
    </NewTaskFrame>
  )
}
export default NewTask
