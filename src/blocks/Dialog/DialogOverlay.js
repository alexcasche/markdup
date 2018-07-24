import styled from 'styled-components'

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.black};
  opacity: 0.5;
  z-index: -1;
`

export default DialogOverlay
