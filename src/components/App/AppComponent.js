import React, { Component } from 'react'
import { App } from 'blocks'
import { Dialog, Page, Settings, Sidebar } from 'components'
import { PropTypes as t } from 'prop-types'

export default class AppComponent extends Component {
  componentDidMount() {
    this.props.actions.appSetup()
  }
  componentDidUpdate(nextProps, nextState) {
    const { allSettings, actions } = nextProps
    if (allSettings.autoSave) {
      actions.saveSession()
    }
  }
  render() {
    return (
      <App className="App">
        <Sidebar />
        <Page />
        <Settings />
        <Dialog />
      </App>
    )
  }
}

AppComponent.propTypes = {
  allWorkspaces: t.object.isRequired,
  allSettings: t.object.isRequired,
  actions: t.shape({
    appSetup: t.func.isRequired,
    saveSession: t.func.isRequired,
  }).isRequired,
}
