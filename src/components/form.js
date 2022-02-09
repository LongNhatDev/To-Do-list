import "./form.css";
import NewTask from "./NewTask";
import List from "./List";
import { connect } from "react-redux";
import React, { useState } from "react";
import { retrieveItems } from "./actions";

const Form = () => {
  const [toDoList, setToDoList] = useState([]);
  console.log(retrieveItems)
  const item = toDoList.map((a) => <List item={a} />);
  return (
    <div className="table">
      <h1>My Todos</h1>
      <NewTask />
      {item}
    </div>
  );
};

export default Form;
