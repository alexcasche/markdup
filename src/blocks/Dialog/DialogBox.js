import styled from 'styled-components'
import { tint } from 'polished'

const DialogBox = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 60px;
  padding: 30px;
  width: calc(100% - 40px);
  max-width: 600px;
  text-align: right;
  background-color: ${props => tint(0.85, props.theme.colors.black)};
  box-shadow: 0 2px 10px 0 ${props => props.theme.colors.black};
  border-radius: 5px;
`

export default DialogBox
