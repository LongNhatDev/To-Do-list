// import "./form.css";
import NewTask from './NewTask'
import List from './List'
import { connect, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'

const Form = ({ toDoList, ItemAction }) => {
  const ItemActionHandler = (action,id) => {
    ItemAction(action,id)
  }

  const itemList = toDoList.map((a, index) => (
    <List
      key={index}
      item={a}
      items={toDoList}
      ItemActionHandler={ItemActionHandler}
    />
  ))

  return (
    <div className="table">
      <h1>My Todos</h1>
      {itemList}
    </div>
  )
}

export default Form
