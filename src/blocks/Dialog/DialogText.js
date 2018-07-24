import styled from 'styled-components'
import { tint } from 'polished'

const DialogText = styled.p`
  margin: 0;
  padding: 20px 20px 30px;
  text-align: left;
  color: ${props => tint(0.85, props.theme.colors.grey)};
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.75;
  svg {
    color: ${props => props.theme.colors.green};
    margin-right: 10px;
  }
`

export default DialogText
