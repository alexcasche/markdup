import styled from 'styled-components'
import { tint } from 'polished'
import Ace from 'react-ace'

/*  Ace overwrites theme prop */
import appTheme from 'constants/theme'

const EditorAce = styled(Ace)`
  overflow: visible !important;
  .ace_gutter {
    background-color: transparent;
  }
  .ace_gutter-layer {
    border-right: 1px solid ${tint(0.5, appTheme.colors.grey)};
    background-color: #fafafa;
  }
  .ace_gutter-cell {
    font-size: 11px;
    font-weight: 300;
    color: #aaa;
  }
  .ace_scrollbar-v {
    display: none !important;
  }
`

export default EditorAce
