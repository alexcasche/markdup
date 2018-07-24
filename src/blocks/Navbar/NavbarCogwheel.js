import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { tint } from 'polished'

const MODIFIERS = {
  open: ({ theme }) => `
    transform: rotate(45deg);
    color: ${tint(0.25, theme.colors.grey)};
  `,
  hover: ({ theme }) => `
    color: ${tint(0.25, theme.colors.grey)};
  `,
}

const NavbarCogwheel = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.grey};
  font-size: 20px;
  transition: inherit;
  transform-origin: 50%;
  ${applyStyleModifiers(MODIFIERS)};
`

export default NavbarCogwheel
