import { ChangeEvent, FC, useState } from "react";
import Form from "../components/form";
import { Todo, TodoStore } from "../store/todoStore";
import AppFrame from "./styles";


const App: FC = () => {
  return (
    <AppFrame>
      <Form todoStore = {TodoStore}/> 
    </AppFrame>
  );
};

export default App;
