import { FC, useEffect, useState } from "react";
import Form from "../components/form";
import { TodoStore } from "../store/todoStore";
import AppFrame from "./styles";

const App: FC = () => {
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    TodoStore.getTodosList();
  }, [refresh]);
  return (
    <AppFrame>
      <Form todoStore={TodoStore} setRefresh={() => setRefresh(!refresh)} />
    </AppFrame>
  );
};

export default App;
