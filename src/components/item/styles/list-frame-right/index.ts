import styled from 'styled-components'

const ListFrameRight = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-end;
  @media only screen and (max-width: 1420px) {
  flex-flow: column wrap;
  align-items:center;

  }
`
export default ListFrameRight
