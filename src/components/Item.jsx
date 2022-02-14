import React from 'react'
import Edit from './icons/edit'
import Complete from './icons/conplete'
import Delete from './icons/delete'
import CONSTANTS from '../constants'
import styled from 'styled-components'

const ListFrameItem = styled.div`
    width: 100%;
    display:flex;
    flex-flow: row wrap;
    justify-content:space-between;
    padding: 10px 20px;
    align-items:center;

    &h1{
      color:rgb(255, 136, 0);
    text-shadow: 2px 2px 2px black;
    }
`
const ListFrameLeft = styled.div`
`
const ListFrameRight = styled.div`
  & #edit{
    border: 1px solid rgb(255, 136, 0);
    color:rgb(255, 136, 0);
  }
  & #complete{
    color:rgb(0, 201, 0);
    transition: transform .3s;
    border: 1px solid rgb(0,201,0);
    color:red;
    border: 1px solid red;
    transition: transform .3s;
  }
  & #delete{
    color:rgb(0, 201, 0);
    transition: transform .3s;
    border: 1px solid rgb(0,201,0);

  }

`
const Button = styled.button`
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
const Item = (props) => {
  const ClickHandler = (action) => {
    props.ClickHandler(action, props.item._id)
  }
  return (
    <ListFrameItem>
      <ListFrameLeft>
        <h1>{props.item.name}</h1>
        <p>{props.item.description}</p>
      </ListFrameLeft>
      <ListFrameRight>
        <Button onClick={() => ClickHandler(CONSTANTS.EDIT)}>
          Edit <Edit />
        </Button>
        {props.item.isDone ? (
          <></>
        ) : (
          <Button id="complete">
            Complete <Complete />
          </Button>
        )}
        <button
          id="delete"
          className="btn"
          onClick={() => ClickHandler(CONSTANTS.DELETE)}
        >
          Delete <Delete />
        </button>
      </ListFrameRight>
    </ListFrameItem>
  )
}
export default Item
