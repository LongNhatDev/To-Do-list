import styled from 'styled-components'

const Button = styled.button`
  padding: 0 8px;
  width: 120px !important;
  height: 35px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bolder;
  margin-left: 15px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`
export default Button
