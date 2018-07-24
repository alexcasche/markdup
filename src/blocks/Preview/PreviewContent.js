import styled from 'styled-components'
import { tint } from 'polished'
import { applyStyleModifiers } from 'styled-components-modifiers'
import readMeStyles from './readMeStyles'

const MODIFIERS = {
  expanded: () => `
    height: calc(100% - 46px);
    margin-top: 46px;
    padding-top: 34px;
    padding-right: calc(10vw - 15px);
    padding-bottom: 60px;
    padding-left: 10vw;
  `,
}

const PreviewContent = styled.div`
  height: calc(100% - 46px);
  padding: 15px;
  overflow-y: scroll;
  word-wrap: break-word;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.text.fontCode};
  font-size: 16px;
  letter-spacing: normal;
  line-height: 1.5;
  user-select: text;
  &::-webkit-scrollbar {
    width: 15px;
    position: absolute;
  }
  &::-webkit-scrollbar-track {
    background-color: #f7f7f7;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => tint(0.35, props.theme.colors.grey)};
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${props => tint(0.5, props.theme.colors.grey)};
  }
  & > div > *:first-child {
    margin-top: 0;
  }
  ${applyStyleModifiers(MODIFIERS)};
  ${readMeStyles};
`

export default PreviewContent
