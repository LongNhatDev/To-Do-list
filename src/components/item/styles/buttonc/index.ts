import styled from 'styled-components'

const ButtonC = styled.button`
  padding: 0 8px;
  width: 120px;
  min-height: 35px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bolder;
  
  transition: transform 0.3s;
  color: green;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`
export default ButtonC
