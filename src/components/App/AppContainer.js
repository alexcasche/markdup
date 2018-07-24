import React from 'react'
import { connect } from 'react-redux'
import AppComponent from './AppComponent'
import { getAllSettings, getAllWorkspaces } from 'selectors'
import { appSetup } from './appSetup'
import { saveSession } from 'utils/localStorage'

export const AppContainer = props => {
  return <AppComponent {...props} />
}

function mapStateToProps(state) {
  return {
    allSettings: getAllSettings(state),
    allWorkspaces: getAllWorkspaces(state),
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      appSetup: appSetup,
      saveSession: saveSession,
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
