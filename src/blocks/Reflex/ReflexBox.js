import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { ReflexElement } from 'react-reflex'

const MODIFIERS = {
  expanded: () => `
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 999;
  `,
}

const ReflexBox = styled(ReflexElement)`
  overflow: hidden;
  @media only screen and (max-width: ${props =>
      props.theme.breakPoints.mobile}) {
    width: 100vw !important;
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default ReflexBox
