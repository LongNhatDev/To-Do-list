import styled from "styled-components";

const ListFrameRight = styled.div`
  & #edit{
    border: 1px solid rgb(255, 136, 0);
    color:rgb(255, 136, 0);
  }
  & #complete{
    color:rgb(0, 201, 0);
    transition: transform .3s;
    border: 1px solid rgb(0,201,0);
    color:red;
    border: 1px solid red;
    transition: transform .3s;
  }
  & #delete{
    color:rgb(0, 201, 0);
    transition: transform .3s;
    border: 1px solid rgb(0,201,0);
  }
`
export default ListFrameRight