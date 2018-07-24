import styled from 'styled-components'

import SettingsButton from './SettingsButton'
import SettingsLink from './SettingsLink'
import SettingsToggle from './SettingsToggle'

const Settings = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 1;
  position: fixed;
  top: 70px;
  right: 30px;
  max-height: calc(100vh - 70px);
  overflow-y: scroll;
  background-color: ${props => props.theme.colors.black};
  border-radius: 4px;
  padding: 12px 20px 30px;
  width: 300px;
`

Settings.Button = SettingsButton
Settings.Link = SettingsLink
Settings.Toggle = SettingsToggle

export default Settings
