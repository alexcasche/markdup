import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCurrentWorkspaceVal, getSettingVal } from 'selectors'
import { updateSetting, updateWorkspace } from 'actions'
import EditorComponent from './EditorComponent'

export const EditorContainer = props => {
  return <EditorComponent {...props} />
}

function mapStateToProps(state) {
  return {
    activeEditor: getSettingVal(state, 'activeEditor'),
    autoSave: getSettingVal(state, 'autoSave'),
    html: getCurrentWorkspaceVal(state, 'html'),
    liveComplete: getSettingVal(state, 'liveComplete'),
    markdown: getCurrentWorkspaceVal(state, 'markdown'),
    splitView: getSettingVal(state, 'splitView'),
    syncEditors: getSettingVal(state, 'syncEditors'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      updateSetting: bindActionCreators(updateSetting, dispatch),
      updateWorkspace: bindActionCreators(updateWorkspace, dispatch),
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorContainer)
