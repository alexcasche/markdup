import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-family: ${props => props.theme.text.fontSans};
  font-weight: 500;
  letter-spacing: normal;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.15s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`
const ButtonLink = Button.withComponent('a')

export default Button
export { ButtonLink }
