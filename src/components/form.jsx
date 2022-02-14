import NewTask from './NewTask'
import List from './List'
import { connect, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const TableDiv = styled.div`
    width:80%;
    height: auto;
    background-color: rgb(65, 63, 63);
    margin-top:150px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-flow:column wrap;
    padding-top: 40px;

    & h1{
      color: white;
      font-size:40px;
      text-shadow: 2px 2px 2px black;
    }
`
const Form = ({ toDoList, ItemAction }) => {
  const ItemActionHandler = (action, id) => {
    ItemAction(action, id)
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
    <TableDiv>
      <h1>My Todos</h1>
      {itemList}
    </TableDiv>
  )
}

export default Form
