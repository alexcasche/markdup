import styled from 'styled-components'
import { tint } from 'polished'

const BannerInput = styled.input`
  width: 100%;
  margin-top: 6px;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => tint(0.95, props.theme.colors.grey)};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 20px;
`

export default BannerInput
