import styled from 'styled-components'

const ListFrameItem = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;

  & h1 {
    color: rgb(255, 136, 0);
    text-shadow: 2px 2px 2px black;
  }
`
export default ListFrameItem
