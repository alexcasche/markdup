import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SidebarComponent from './SidebarComponent'
import { getSettingVal, getAllWorkspaces, getNumWorkspaces } from 'selectors'
import { createWorkspace, updateLayout, updateSetting } from 'actions'

export const SidebarContainer = props => {
  return <SidebarComponent {...props} />
}

function mapStateToProps(state) {
  return {
    activeWorkspace: getSettingVal(state, 'activeWorkspace'),
    allWorkspaces: getAllWorkspaces(state),
    numWorkspaces: getNumWorkspaces(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createWorkspace: bindActionCreators(createWorkspace, dispatch),
      updateLayout: bindActionCreators(updateLayout, dispatch),
      updateSetting: bindActionCreators(updateSetting, dispatch),
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer)
