import React from 'react'
import { Dialog } from 'blocks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

const deleteWorkspace = props => {
  const { closeDialog, currentWorkspace, actions } = props
  const confirmAction = () => {
    actions.deleteWorkspace()
    closeDialog()
  }
  return [
    <Dialog.Header key="header">
      Are you sure you want to delete this workspace?
    </Dialog.Header>,
    <Dialog.Text key="text">
      <FontAwesomeIcon icon={faFileAlt} />
      Workspace: {currentWorkspace.title}
    </Dialog.Text>,
    <Dialog.Button key="cancel" onClick={closeDialog}>
      Cancel
    </Dialog.Button>,
    <Dialog.Button key="confirm" onClick={confirmAction}>
      Confirm
    </Dialog.Button>,
  ]
}

const resetSession = props => {
  const { closeDialog, numWorkspaces, actions } = props
  const confirmAction = () => {
    actions.resetSession()
    closeDialog()
  }
  return [
    <Dialog.Header key="header">
      Are you sure you want to delete this session?
    </Dialog.Header>,
    <Dialog.Text key="text">
      <FontAwesomeIcon icon={faFileAlt} />
      Workspaces: {numWorkspaces}
    </Dialog.Text>,
    <Dialog.Button key="cancel" onClick={closeDialog}>
      Cancel
    </Dialog.Button>,
    <Dialog.Button key="confirm" onClick={confirmAction}>
      Confirm
    </Dialog.Button>,
  ]
}

const saveSession = props => {
  const { closeDialog, actions } = props
  const saveSuccess = actions.saveSession() !== null ? true : false
  const confirmAction = () => {
    if (saveSuccess) {
      actions.updateSetting({ showSave: false })
    }
    closeDialog()
  }
  const success = {
    header: 'Your session was successfully saved in your browser.',
    text:
      'If you reset your browser your session will be removed.  To prevent losing data copy the contents to a local file.',
  }
  const fail = {
    header: 'Your session could not be saved in your browser.',
    text: "Check your browser's settings to ensure local storage is enabled.",
  }
  const content = saveSuccess ? success : fail
  return [
    <Dialog.Header key="header">{content.header}</Dialog.Header>,
    <Dialog.Text key="text">{content.text}</Dialog.Text>,
    <Dialog.Button key="close" onClick={confirmAction}>
      Dismiss
    </Dialog.Button>,
  ]
}

export default {
  deleteWorkspace: deleteWorkspace,
  resetSession: resetSession,
  saveSession: saveSession,
}
