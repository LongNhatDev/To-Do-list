import styled from 'styled-components'

const NewTaskFrameSupLeft = styled.div`
  flex: 4;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  @media only screen and (max-width: 730px) {
   flex: 1;
  flex-flow: column wrap;

}
`
export default NewTaskFrameSupLeft
