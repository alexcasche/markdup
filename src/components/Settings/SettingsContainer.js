import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLayoutVal, getSettingVal } from 'selectors'
import { toggleSetting, updateLayout } from 'actions'
import SettingsComponent from './SettingsComponent'

export const SettingsContainer = props => {
  return <SettingsComponent {...props} />
}

function mapStateToProps(state) {
  return {
    settingsLinks: {
      autoSave: getSettingVal(state, 'autoSave'),
      liveComplete: getSettingVal(state, 'liveComplete'),
      splitView: getSettingVal(state, 'splitView'),
      syncEditors: getSettingVal(state, 'syncEditors'),
    },
    showSettings: getLayoutVal(state, 'showSettings'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      toggleSetting: bindActionCreators(toggleSetting, dispatch),
      updateLayout: bindActionCreators(updateLayout, dispatch),
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsContainer)
