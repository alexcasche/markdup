import styled from 'styled-components'
import { tint } from 'polished'

const DialogHeader = styled.h1`
  margin: 0;
  text-align: left;
  color: ${props => tint(0.25, props.theme.colors.grey)};
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 28px;
`

export default DialogHeader
