// import "./form.css";
import NewTask from "./NewTask";
import List from "./List";
import { connect, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";


const Form = ( {toDoList, RemoveItem} ) => {
  

  const RemoveItemHandler = (id) => {
    RemoveItem(id);
  }

  const itemList = toDoList.map((a) => <List item={a} items={toDoList} RemoveItemHandler={RemoveItemHandler} />);
  
  return (

    <div className="table">
      <h1>My Todos</h1>
      {itemList}
    </div>
  );
};


export default Form;
