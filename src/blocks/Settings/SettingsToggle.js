import { Toggle } from 'elements'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { shade } from 'polished'
import 'react-toggle/style.css'

const MODIFIERS = {
  checked: ({ theme }) => `
    .react-toggle-track {
      background-color: ${shade(0.9, theme.colors.green)} !important;
    }
  `,
}

const SettingsToggle = Toggle.extend`
  pointer-events: none;
  .react-toggle-track {
    background-color: ${props => shade(0.5, props.theme.colors.grey)};
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default SettingsToggle
