import { Button } from 'elements'
import { tint } from 'polished'

const DialogClose = Button.extend`
  background-color: ${props => tint(0.92, props.theme.colors.black)};
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 11px 8px 12px;
  border-radius: 0 5px 0 5px;
  font-size: 16px;
  svg {
    color: ${props => tint(0.65, props.theme.colors.grey)};
  }
  &:hover {
    background-color: ${props => tint(0.94, props.theme.colors.black)};
    svg {
      color: ${props => tint(0.6, props.theme.colors.grey)};
    }
  }
`

export default DialogClose
