import { ButtonLink } from 'elements'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { shade, tint } from 'polished'

const MODIFIERS = {
  disabled: ({ theme }) => `
    border-radius: 4px 0 0 4px;
    pointer-events: none;
    opacity: 0.85;
  `,
}

const SettingsButton = ButtonLink.extend`
  width: 50%;
  margin-top: 15px;
  height: 40px;
  background-color: ${props => shade(0.75, props.theme.colors.blue)};
  border-radius: 0 4px 4px 0;
  color: ${props => tint(0.15, props.theme.colors.grey)};
  font-size: 14px;
  &:hover {
    background-color: ${props => shade(0.85, props.theme.colors.blue)};
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default SettingsButton
