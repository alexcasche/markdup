import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { ReflexContainer } from 'react-reflex'
import { tint } from 'polished'
import 'react-reflex/styles.css'

import ReflexBox from './ReflexBox'
import { ReflexSplitter } from 'react-reflex'

const MODIFIERS = {
  mobilePreview: ({ theme }) => `
    @media only screen and (max-width: ${theme.breakPoints.mobile}) {
      transform: translateX(-50%);
    }
  `,
}

const Reflex = styled(ReflexContainer)`
  .reflex-splitter {
    z-index: 1 !important;
    border-color: ${props => tint(0.35, props.theme.colors.grey)} !important;
  }
  &.horizontal {
    .reflex-splitter {
      border-top: none !important;
      height: 1px !important;
    }
  }
  @media only screen and (max-width: ${props =>
      props.theme.breakPoints.mobile}) {
    &.vertical {
      width: 200vw !important;
    }
    .reflex-element {
      flex: 1 0 0% !important;
    }
    .reflex-splitter {
      display: none !important;
    }
  }
  ${applyStyleModifiers(MODIFIERS)};
`

Reflex.Box = ReflexBox
Reflex.Split = ReflexSplitter

export default Reflex
