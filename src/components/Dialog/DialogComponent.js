import React from 'react'
import { createPortal } from 'react-dom'
import { Dialog } from 'blocks'
import { default as DialogInner } from './dialogFactory'
import { PropTypes as t } from 'prop-types'

Dialog.Inner = DialogInner

const DialogComponent = props => {
  if (props.showDialog) {
    return createPortal(
      <Dialog className="Dialog">
        <Dialog.Overlay />
        <Dialog.Inner {...props} />
      </Dialog>,
      document.getElementById('modal-root')
    )
  } else return null
}

DialogComponent.propTypes = {
  currentWorkspace: t.shape({
    html: t.string.isRequired,
    markdown: t.string.isRequired,
    title: t.string.isRequired,
  }).isRequired,
  numWorkspaces: t.number.isRequired,
  showDialog: t.oneOf(['deleteWorkspace', 'resetSession', 'saveSession', false])
    .isRequired,
  showSave: t.bool.isRequired,
  actions: t.shape({
    deleteWorkspace: t.func.isRequired,
    resetSession: t.func.isRequired,
    saveSession: t.func.isRequired,
    updateLayout: t.func.isRequired,
  }).isRequired,
}

export default DialogComponent
