import "./Item.css"
import React from 'react'
import Edit from "./icons/edit"
import Complete from "./icons/conplete"
import Delete from "./icons/delete"

const Item = (props) => {
    return (
        <div className="List_Frame_Item">
            <div className="List_Frame-left">
                <h1>{props.item.name}</h1>
                <p>{props.item.description}</p>
            </div>
            <div className="List_Frame-right">
                <button id="edit" className="btn">Edit <Edit /></button>
                <button id="complete" className="btn">Complete <Complete /></button>
                <button id="delete" className="btn">Delete <Delete /></button>
            </div>
        </div>
    )
}
export default Item