import styled from 'styled-components'

import DialogBox from './DialogBox'
import DialogButton from './DialogButton'
import DialogClose from './DialogClose'
import DialogHeader from './DialogHeader'
import DialogOverlay from './DialogOverlay'
import DialogText from './DialogText'

const Dialog = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

Dialog.Box = DialogBox
Dialog.Button = DialogButton
Dialog.Close = DialogClose
Dialog.Header = DialogHeader
Dialog.Overlay = DialogOverlay
Dialog.Text = DialogText

export default Dialog
