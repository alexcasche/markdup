import React from 'react'
import { connect } from 'react-redux'
import { getCurrentWorkspaceVal, getSettingVal } from 'selectors'
import PreviewComponent from './PreviewComponent'

export const PreviewContainer = props => {
  return <PreviewComponent {...props} />
}

function mapStateToProps(state) {
  return {
    activeEditor: getSettingVal(state, 'activeEditor'),
    html: getCurrentWorkspaceVal(state, 'html'),
    markdown: getCurrentWorkspaceVal(state, 'markdown'),
  }
}

export default connect(mapStateToProps)(PreviewContainer)
