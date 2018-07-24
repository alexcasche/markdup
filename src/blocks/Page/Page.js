import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import PageOverlay from './PageOverlay'

const MODIFIERS = {
  sidebar: () => `
    transform: translateX(300px);
  `,
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  height: 100%;
  overflow: hidden;
  transition: transform 0.35s ease-in-out;
  z-index: 1;
  ${applyStyleModifiers(MODIFIERS)};
`

Page.Overlay = PageOverlay

export default Page
