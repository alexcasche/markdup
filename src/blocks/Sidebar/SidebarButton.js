import { applyStyleModifiers } from 'styled-components-modifiers'
import { shade } from 'polished'
import { Button } from 'elements'

const MODIFIERS = {
  new: ({ theme }) => `
    margin-top: 15px;
    background-color: ${shade(0.85, theme.colors.blue)};
    &:hover:not(:active) {
      background-color: ${theme.colors.blue};
    }
  `,
  save: ({ theme }) => `
    background-color: ${shade(0.85, theme.colors.green)};
    &:hover:not(:active) {
      background-color: ${theme.colors.green};
    }
  `,
  delete: ({ theme }) => `
    background-color: transparent;
    font-size: 14px;
    border: 1px solid ${shade(0.75, theme.colors.grey)};
    color: ${shade(0.75, theme.colors.grey)};
    &:hover:not(:active) {
      border: 1px solid ${theme.colors.grey};
      color: ${theme.colors.grey};
    }
  `,
}

const SidebarButton = Button.extend`
  margin: 10px auto;
  width: calc(100% - 30px);
  height: 44px;
  font-size: 16px;
  color: ${props => props.theme.colors.black};
  ${applyStyleModifiers(MODIFIERS)};
`

export default SidebarButton
