import { Button } from 'elements'
import { tint } from 'polished'

const DialogButton = Button.extend`
  display: inline-block;
  padding: 10px 18px;
  background-color: ${props => tint(0.78, props.theme.colors.black)};
  color: ${props => tint(0.65, props.theme.colors.grey)};
  font-size: 14px;
  border-radius: 2px;
  margin-left: 15px;
  &:hover {
    background-color: ${props => tint(0.74, props.theme.colors.black)};
    color: ${props => tint(0.25, props.theme.colors.grey)};
  }
`

export default DialogButton
