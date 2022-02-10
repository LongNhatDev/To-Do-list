import './Item.css'
import React from 'react'
import Edit from './icons/edit'
import Complete from './icons/conplete'
import Delete from './icons/delete'
import CONSTANTS from '../constants'
const Item = (props) => {
  const ClickHandler = (action) => {
    props.ClickHandler(action, props.item._id)
  }
  return (
    <div className="List_Frame_Item">
      <div className="List_Frame-left">
        <h1>{props.item.name}</h1>
        <p>{props.item.description}</p>
      </div>
      <div className="List_Frame-right">
        <button id="edit" className="btn" onClick={() => ClickHandler(CONSTANTS.EDIT)}>
          Edit <Edit />
        </button>
        {props.item.isDone ? (
          <></>
        ) : (
          <button id="complete" className="btn">
            Complete <Complete />
          </button>
        )}
        <button
          id="delete"
          className="btn"
          onClick={() => ClickHandler(CONSTANTS.DELETE)}
        >
          Delete <Delete />
        </button>
      </div>
    </div>
  )
}
export default Item
