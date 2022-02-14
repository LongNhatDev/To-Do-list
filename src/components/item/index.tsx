import ListFrameItem from "./styles/list-frame-item";
import ListFrameRight from "./styles/list-frame-right";
import Button from "./styles/button";
import Edit from "../icons/edit";
import Complete from "../icons/conplete";
import Delete from "../icons/delete";
import ListFrameLeft from "./styles/list-frame-left";

const Item = () => {
  return (
    <ListFrameItem>
      <ListFrameLeft>
        <h1></h1>
        <p></p>
      </ListFrameLeft>
      <ListFrameRight>
        <Button>
          Edit <Edit />
        </Button>
        <Button id="complete">
          Complete <Complete />
        </Button>
        <Button>
          Delete <Delete />
        </Button>
      </ListFrameRight>
    </ListFrameItem>
  );
};
export default Item;
