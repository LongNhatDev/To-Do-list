import { observer } from "mobx-react-lite";
import { TodoList } from "../../store/todoStore";
import Item from "../item";
import ListFrame from "./styles";

interface IProps {
  todoStore: TodoList;
  setRefresh(): void;
}

const List = observer(({ todoStore, setRefresh }: IProps) => (
  <ListFrame>
    {todoStore.todos.map((todo) => (
      <Item
        todo={todo}
        todoStore={todoStore}
        key={todo._id}
        setRefresh={() => setRefresh()}
      />
    ))}
  </ListFrame>
));

export default List;
