import styled from 'styled-components'

const ListFrameItem = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 3px solid white;
  align-items: center;
  @media only screen and (max-width: 730px) {
  flex-flow: column wrap;
  }
`
export default ListFrameItem
