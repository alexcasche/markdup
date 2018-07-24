import { injectGlobal } from 'styled-components'
import { tint } from 'polished'
import theme from './theme'

injectGlobal`
  body {
    margin: 0;
    font-family: 'IBM Plex Sans Condensed', Helvetica, Arial, sans-serif;
    letter-spacing: .15em;
    font-size: 17px;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    user-select: none;
  }
  * {
    box-sizing: border-box;
  }
  #modal-root {
    position: relative;
    z-index: 1;
  }
  .ace_editor.ace_autocomplete {
    background: white;
    border: 2px solid ${theme.colors.black};
    border-radius: 2px;
    color: ${theme.colors.black};
    font-family: ${theme.text.fontCode};
    font-size: 13px !important;
    line-height: 1.75 !important;
    .ace_content {
      cursor: pointer !important;
      .ace_marker-layer {
        .ace_active-line {
          background-color: ${tint(0.25, theme.colors.grey)};
        }
        .ace_line-hover {
          background-color: ${tint(0.15, theme.colors.grey)};
          border-color: ${tint(0.25, theme.colors.grey)} !important;
        }
      }
      .ace_text-layer {
        .ace_completion-highlight {
          text-shadow: none;
          color: inherit;
          font-weight: 700;
        }
      }
    }
  }
`
