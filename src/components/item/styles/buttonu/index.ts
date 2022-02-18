import styled from 'styled-components'

const ButtonU = styled.button`
  padding: 0 8px;
  min-height: 35px;
  width: 120px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bolder;

  transition: transform 0.3s;
  color: orange;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`
export default ButtonU
