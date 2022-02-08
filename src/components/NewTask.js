import "./NewTask.css"
import React from 'react'

const NewTask = () => {
    return (
        <div className="NewTask-Frame">
            <div className="NewTask-Frame-supleft">
                <div className="NewTask-Frame_sub">
                    <label>Name</label>
                    <input type="text"></input>
                </div>
                <div className="NewTask-Frame_sub">
                    <label>Description</label>
                    <input type="text"></input>
                </div>
            </div>
            <div  className="NewTask-Frame-supright">
            <button className="btn">Add Todo</button>
            </div>
        </div>
    )
}

export default NewTask