import { Button } from 'elements'
import { tint, shade } from 'polished'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  mobile: ({ theme }) => `
    color: pink;
    @media only screen and (min-width: ${theme.breakPoints.mobile}) {
      display: none;
    }
  `,
}

const PreviewButton = Button.extend`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: 10px;
  background-color: ${props => tint(0.25, props.theme.colors.grey)};
  border: 1px solid ${props => tint(0.5, props.theme.colors.grey)};
  border-radius: 2px;
  z-index: 5;
  &:hover {
    background-color: ${props => tint(0.35, props.theme.colors.grey)};
  }
  svg {
    color: ${props => shade(0.9, props.theme.colors.grey)};
    height: 14px;
    width: auto !important;
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default PreviewButton
