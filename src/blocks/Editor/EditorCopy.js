import styled from 'styled-components'
import { tint } from 'polished'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  visible: ({ theme }) => `
    opacity: 1;
  `,
}

const EditorCopy = styled.div`
  position: absolute;
  top: 42px;
  right: -20px;
  width: 160px;
  pointer-events: none;
  padding: 8px 16px;
  background-color: ${props => tint(0.85, props.theme.colors.black)};
  border-radius: 2px;
  color: ${props => tint(0.95, props.theme.colors.grey)};
  font-size: 14px;
  text-transform: capitalize;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
  svg {
    position: absolute;
    right: 26px;
    top: -18px;
    height: 30px;
    color: ${props => tint(0.85, props.theme.colors.black)};
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default EditorCopy
