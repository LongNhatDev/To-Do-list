import styled from 'styled-components'

const NewTaskFrame = styled.div`
  background-color: rgb(141, 141, 141);
  width: 90%;
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  height: auto;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  padding: 20px 0;
  @media only screen and (max-width: 730px) {
    flex-flow: column wrap;
    justify-content: center;
}
`
export default NewTaskFrame
