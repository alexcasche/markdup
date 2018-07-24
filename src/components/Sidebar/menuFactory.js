import React from 'react'
import Collapsible from 'react-collapsible'
import { Sidebar } from 'blocks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import menuWorkspaces from './menuWorkspaces'
import menuResources from './menuResources'

export const getMenu = (menu, allWorkspaces, updateSetting) => {
  return menu === 'workspaces'
    ? menuWorkspaces(allWorkspaces, updateSetting)
    : menuResources()
}

export const menuTrigger = (title, icon) => {
  return (
    <Sidebar.Trigger>
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
      <FontAwesomeIcon icon={faChevronDown} />
    </Sidebar.Trigger>
  )
}

const menuLinks = (links, linkIcon, activeWorkspace) => {
  return links.map((link, index) => {
    const modifiers = [...(activeWorkspace === link.value ? ['active'] : [])]
    return (
      <Sidebar.Link key={index} {...link.linkProps} modifiers={modifiers}>
        {link.title}
        <FontAwesomeIcon icon={linkIcon} />
      </Sidebar.Link>
    )
  })
}

const menuFactory = ({
  menu,
  activeWorkspace,
  allWorkspaces,
  updateSetting,
}) => {
  const menuObj = getMenu(menu, allWorkspaces, updateSetting)
  const { title, icon, links, linkIcon } = menuObj
  return (
    <Collapsible transitionTime={250} trigger={menuTrigger(title, icon)}>
      {menuLinks(links, linkIcon, activeWorkspace)}
    </Collapsible>
  )
}

export default menuFactory
