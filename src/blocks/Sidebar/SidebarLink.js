import { applyStyleModifiers } from 'styled-components-modifiers'
import { tint } from 'polished'
import { Link } from 'elements'

const MODIFIERS = {
  active: ({ theme }) => `
    &, &:hover {
      pointer-events: none;
      cursor: default;
      color: ${theme.colors.grey};
      svg.fa-check-circle {
        color: ${theme.colors.grey};
      }
    }
  `,
}

const SidebarLink = Link.extend`
  position: relative;
  display: block;
  padding: 0 0 0 50px;
  border-bottom: 1px solid ${props => tint(0.85, props.theme.colors.black)};
  color: ${props => props.theme.colors.grey};
  font-size: 14px;
  font-weight: 400;
  line-height: 50px;
  text-align: left;
  text-decoration: none;
  letter-spacing: 1px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  transition: color 0.15s ease-in-out;
  &:last-child {
    border-bottom: none;
  }
  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 15px;
    transition: inherit;
    &.fa-check-circle {
      color: transparent;
    }
    &.fa-link {
      font-size: 14px;
    }
  }
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.green};
    svg {
      color: ${props => props.theme.colors.green};
    }
    .fa-check-circle {
      color: transparent;
    }
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default SidebarLink
