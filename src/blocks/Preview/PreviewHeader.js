import styled from 'styled-components'
import { tint } from 'polished'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  expanded: () => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 10vw;
    z-index: 1;
  `,
}

const PreviewHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  background-color: #f7f7f7;
  border-top: 1px solid ${props => tint(0.5, props.theme.colors.grey)};
  border-bottom: 1px solid ${props => tint(0.5, props.theme.colors.grey)};
  overflow: visible;
  min-height: 46px;
  ${applyStyleModifiers(MODIFIERS)};
`

export default PreviewHeader
