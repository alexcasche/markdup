import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { tint } from 'polished'

const MODIFIERS = {
  open: ({ theme }) => `
    background-color: transparent;
    &:before {
      transform: rotate(-45deg) translate(-4px, 4px);
    }
    &:after {
      transform: rotate(45deg) translate(-4px, -4px);
    }
  `,
  hover: ({ theme }) => `
    background-color: ${tint(0.25, theme.colors.grey)};
    &:before, &:after {
      background-color: ${tint(0.25, theme.colors.grey)};
    }
  `,
}

const NavbarBurger = styled.span`
  position: relative;
  background-color: ${props => props.theme.colors.grey};
  width: 20px;
  height: 2px;
  transition: inherit;
  &:before,
  &:after {
    position: absolute;
    left: 0;
    top: -6px;
    content: '';
    width: inherit;
    height: inherit;
    background-color: ${props => props.theme.colors.grey};
    width: 20px;
    height: 2px;
    transition: inherit;
  }
  &:after {
    top: 6px;
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default NavbarBurger
