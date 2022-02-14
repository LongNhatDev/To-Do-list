import Button from "./styles/button";
import Input from "./styles/input";
import Label from "./styles/label";
import NewTaskFrame from "./styles/new-task-frame";
import NewTaskFrameSub from "./styles/new-task-frame-sub";
import NewTaskFrameSupLeft from "./styles/new-task-frame-sup_left";
import NewTaskFrameSupRight from "./styles/new-task-frame-sup_right";

const NewItem = () => {
  return (
    <NewTaskFrame>
      <NewTaskFrameSupLeft>
        <NewTaskFrameSub>
          <Label>Name</Label>
          <Input/>
        </NewTaskFrameSub>
        <NewTaskFrameSub>
          <Label>Description</Label>
          <Input/>
        </NewTaskFrameSub>
      </NewTaskFrameSupLeft>
      <NewTaskFrameSupRight>
        <Button className="btn">Add Todo</Button>
      </NewTaskFrameSupRight>
    </NewTaskFrame>
  );
};
export default NewItem;
