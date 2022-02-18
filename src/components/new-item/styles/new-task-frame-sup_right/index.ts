import styled from 'styled-components'

const NewTaskFrameSupRight = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  & Button {
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: rgb(255, 136, 0);
    color: white;
    font-size: 17px;
    font-weight: bolder;
    margin-right: 10px;
  }
`
export default NewTaskFrameSupRight
