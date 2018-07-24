import React from 'react'
import { Dialog } from 'blocks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import dialogList from './dialogList'

const dialogFactory = props => {
  Dialog.Content = dialogList[props.showDialog]
  const closeDialog = () => props.actions.updateLayout({ showDialog: false })
  const showDialog = props.showDialog === 'saveSession' ? props.showSave : true
  if (showDialog) {
    return (
      <Dialog.Box>
        <Dialog.Close onClick={closeDialog}>
          <FontAwesomeIcon icon={faTimes} />
        </Dialog.Close>
        <Dialog.Content {...props} closeDialog={closeDialog} />
      </Dialog.Box>
    )
  } else {
    closeDialog()
    return null
  }
}

export default dialogFactory
