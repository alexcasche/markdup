import { RouterLink } from 'elements'
import { shade, tint } from 'polished'

const NavbarBrand = RouterLink.extend`
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.text.fontLogo};
  font-size: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.15s ease-in-out;
  span {
    color: ${props => shade(0.8, props.theme.colors.grey)};
    transition: inherit;
  }
  &:hover {
    color: ${props => tint(0.25, props.theme.colors.grey)};
    span {
      color: ${props => tint(0.65, props.theme.colors.grey)};
    }
  }
`

export default NavbarBrand
