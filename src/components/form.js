import "./form.css"
import NewTask from "./NewTask"
import List from "./List"
import React, { useState } from 'react';
import Item from "./Item";

const List_ToDo = [
  {
    id: "1",
    name: "Learn OOP",
    description: "This is demo hihi",
  }, {
    id: "2",
    name: "Learn SOA",
    description: "This is demo hihi",
  }, {
    id: "3",
    name: "Learn LOL",
    description: "This is demo hihi",
  }
]

const item = List_ToDo.map(a => <List item={a}/>)

const Form = () => {


  return (
    <div className="table">
      <h1>My Todos</h1>
      <NewTask/>
      {item}
    </div>
  )
}

export default Form