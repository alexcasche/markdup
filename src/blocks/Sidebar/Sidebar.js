import styled from 'styled-components'
import { tint } from 'polished'

import SidebarBrand from './SidebarBrand'
import SidebarButton from './SidebarButton'
import SidebarTrigger from './SidebarTrigger'
import SidebarLink from './SidebarLink'

const Sidebar = styled.div`
  position: fixed;
  flex-direction: column;
  text-align: center;
  width: 300px;
  height: 100vh;
  font-family: ${props => props.theme.text.fontSans};
  background-color: ${props => tint(0.95, props.theme.colors.black)};
  overflow-y: scroll;
`

Sidebar.Brand = SidebarBrand
Sidebar.Button = SidebarButton
Sidebar.Trigger = SidebarTrigger
Sidebar.Link = SidebarLink

export default Sidebar
