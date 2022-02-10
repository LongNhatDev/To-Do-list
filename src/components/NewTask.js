// import "./NewTask.css";
import React from "react";

const NewTask = (props) => {
  return (
    <div className="NewTask-Frame">
      <div className="NewTask-Frame-supleft">
        <div className="NewTask-Frame_sub">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => props.onChangeName(e)}
          ></input>
        </div>
        <div className="NewTask-Frame_sub">
          <label>Description</label>
          <input
            type="text"
            onChange={(e) => props.onChangeDescription(e)}
          ></input>
        </div>
      </div>
      <div className="NewTask-Frame-supright">
        <button className="btn" onClick={props.SendDataToAPI}>Add Todo</button>
      </div>
    </div>
  );
};

export default NewTask;
