import "./form.css"
import NewTask from "./NewTask"
import List from "./List"
import React, { useState } from 'react';

const List_ToDo= [
  {
    id:"1",
    name: "Learn OOP",
    description: 294.67,
  },
  {
    id:"2",
    name: "Vinfast Turbo 2.0",
    description: 194.67,
  },
  {
    id:"3",
    name: "Lexus LX570",
    description: 888.22,
  },
  {
    id:"4",
    name: "Mec MayBach",
    description: 777.67,
  }
]


const Form = () => {

  const [expenses, setExpenses] = useState(List_ToDo)

  // Handler add new Item
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }
  return (
    <div className="table">
        <h1>My Todos</h1>
        <NewTask/>
        <List item={expenses}/>
    </div>
    )
}

export default Form