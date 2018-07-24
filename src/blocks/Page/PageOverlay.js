import styled from 'styled-components'

const PageOverlay = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.black};
  opacity: 0.5;
  z-index: 9;
`

export default PageOverlay
