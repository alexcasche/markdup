import React from 'react'
import { Settings } from 'blocks'
import { default as Menu } from './menuFactory'
import { PropTypes as t } from 'prop-types'

Settings.Menu = Menu

const SettingsComponent = props => {
  const { showSettings, settingsLinks, actions } = props
  if (showSettings) {
    return (
      <Settings className="Settings">
        <Settings.Menu
          settingsLinks={settingsLinks}
          toggleSetting={actions.toggleSetting}
        />
        <Settings.Link
          onClick={() => actions.updateLayout({ showDialog: 'resetSession' })}
        >
          reset session
        </Settings.Link>
        <Settings.Button target="_blank" href="./" modifiers={['disabled']}>
          markdup
        </Settings.Button>
        <Settings.Button target="_blank" href="'./">
          styldup
        </Settings.Button>
      </Settings>
    )
  } else return null
}

SettingsComponent.propTypes = {
  showSettings: t.bool.isRequired,
  settingsLinks: t.shape({
    autoSave: t.bool.isRequired,
    liveComplete: t.bool.isRequired,
    splitView: t.bool.isRequired,
    syncEditors: t.bool.isRequired,
  }).isRequired,
  actions: t.shape({
    toggleSetting: t.func.isRequired,
    updateLayout: t.func.isRequired,
  }).isRequired,
}

export default SettingsComponent
