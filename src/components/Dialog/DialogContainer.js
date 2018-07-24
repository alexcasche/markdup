import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getCurrentWorkspace,
  getLayoutVal,
  getNumWorkspaces,
  getSettingVal,
} from 'selectors'
import { deleteWorkspace, updateLayout, updateSetting } from 'actions'
import { resetSession, saveSession } from 'utils/localStorage'
import DialogComponent from './DialogComponent'

export const DialogContainer = props => {
  return <DialogComponent {...props} />
}

function mapStateToProps(state) {
  return {
    currentWorkspace: getCurrentWorkspace(state),
    numWorkspaces: getNumWorkspaces(state),
    showDialog: getLayoutVal(state, 'showDialog'),
    showSave: getSettingVal(state, 'showSave'),
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deleteWorkspace: bindActionCreators(deleteWorkspace, dispatch),
      resetSession: resetSession,
      saveSession: saveSession,
      updateLayout: bindActionCreators(updateLayout, dispatch),
      updateSetting: bindActionCreators(updateSetting, dispatch),
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogContainer)
