import "./List.css"
import React from 'react'
import Edit from "./icons/edit"
import Complete from "./icons/conplete"
import Delete from "./icons/delete"

const List = () => {
    return (
        <div className="List_Frame">
            <div className="List_Frame_Item">
                <div className="List_Frame-left">
                    <h1>Learn OOP</h1>
                    <p> This is demo hihi</p>
                </div>
                <div className="List_Frame-right">
                <button id="edit" className="btn">Edit <Edit/></button>
                    <button id="complete" className="btn">Complete <Complete/></button>
                    <button id="delete" className="btn">Delete <Delete/></button>
                </div>
            </div>
            <hr/>
            <div className="List_Frame_Item">
                <div className="List_Frame-left">
                    <h1>Learn OOP</h1>
                    <p> This is demo hihi</p>
                </div>
                <div className="List_Frame-right">
                <button id="edit" className="btn">Edit <Edit/></button>
                    <button id="complete" className="btn">Complete <Complete/></button>
                    <button id="delete" className="btn">Delete <Delete/></button>
                </div>
            </div>
            <hr/>
            <div className="List_Frame_Item">
                <div className="List_Frame-left">
                    <h1>Learn OOP</h1>
                    <p> This is demo hihi</p>
                </div>
                <div className="List_Frame-right">
                <button id="edit" className="btn">Edit <Edit/></button>
                    <button id="complete" className="btn">Complete <Complete/></button>
                    <button id="delete" className="btn">Delete <Delete/></button>
                </div>
            </div>
            <hr/>
            <div className="List_Frame_Item">
                <div className="List_Frame-left">
                    <h1>Learn OOP</h1>
                    <p> This is demo hihi</p>
                </div>
                <div className="List_Frame-right">
                <button id="edit" className="btn">Edit <Edit/></button>
                    <button id="complete" className="btn">Complete <Complete/></button>
                    <button id="delete" className="btn">Delete <Delete/></button>
                </div>
            </div>
        </div>
    )
}

export default List