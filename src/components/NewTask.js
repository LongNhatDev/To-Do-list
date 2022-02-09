import "./NewTask.css"
import React, { useState } from 'react'
import { createItem } from "./actions";
import { connect } from "react-redux";
const NewTask = (props) => {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const saveItem = () => {
        createItem(name,description);
        resetFill();
        alert("Save Successfully!!!")
    }
    const resetFill = () => {
        setName("");
        setDescription("");
    }
    return (
        <div className="NewTask-Frame">
            <div className="NewTask-Frame-supleft">
                <div className="NewTask-Frame_sub">
                    <label>Name</label>
                    <input type="text" onChange={onChangeName}></input>
                </div>
                <div className="NewTask-Frame_sub">
                    <label>Description</label>
                    <input type="text" onChange={onChangeDescription}></input>
                </div>
            </div>
            <div  className="NewTask-Frame-supright">
            <button className="btn" onClick={saveItem}>Add Todo</button>
            </div>
        </div>
    )
}

export default connect(null, {createItem})(NewTask);