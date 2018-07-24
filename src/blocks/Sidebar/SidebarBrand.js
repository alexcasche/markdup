import styled from 'styled-components'
import { shade } from 'polished'

const SidebarBrand = styled.h1`
  margin: 0;
  color: ${props => shade(0.8, props.theme.colors.grey)};
  font-family: ${props => props.theme.text.fontLogo};
  font-size: 24px;
  letter-spacing: 4px;
  letter-spacing: 4px;
  line-height: 86px;
  text-align: center;
  text-transform: uppercase;
  span {
    color: ${props => props.theme.colors.grey};
  }
`

export default SidebarBrand
