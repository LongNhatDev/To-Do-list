import { observer } from "mobx-react-lite";
import { TodoList } from "../../store/todoStore";
import List from "../list-item";
import NewItem from "../new-item";
import TableDiv from "./styles";
interface IProps {
  todoStore: TodoList;
  setRefresh(): void;
}
const Form = observer(({ todoStore, setRefresh }: IProps) => {
  return (
    <TableDiv>
      <h1>My Todos</h1>
      <NewItem todoStore={todoStore} setRefresh={() => setRefresh()}/>
      <List todoStore={todoStore} setRefresh={() => setRefresh()} />
    </TableDiv>
  );
});

export default Form;
