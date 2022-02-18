import styled from "styled-components";

const ListFrameLeft = styled.div`
  display: flex;
  flex: 1.5;
  flex-flow: column wrap;
  justify-content: flex-start !important;
  padding: 20px;
  align-items: flex-start !important;
  text-align: left !important;
  & h1 {
    color: rgb(255, 136, 0) !important;
    text-shadow: 2px 2px 2px black !important;
  }
`;
export default ListFrameLeft;
