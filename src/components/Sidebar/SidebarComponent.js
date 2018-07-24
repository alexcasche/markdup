import React from 'react'
import { Sidebar } from 'blocks'
import { default as Menu } from './menuFactory'
import { PropTypes as t } from 'prop-types'

Sidebar.Menu = Menu

const SidebarComponent = props => {
  const { activeWorkspace, allWorkspaces, numWorkspaces, actions } = props
  return (
    <Sidebar className="Sidebar">
      <Sidebar.Brand>
        <span>markd</span>up
      </Sidebar.Brand>
      <Sidebar.Menu
        activeWorkspace={activeWorkspace}
        allWorkspaces={allWorkspaces}
        menu="workspaces"
        updateSetting={actions.updateSetting}
      />
      <Sidebar.Menu activeWorkspace={activeWorkspace} menu="resources" />
      <Sidebar.Button modifiers={['new']} onClick={actions.createWorkspace}>
        New Workspace
      </Sidebar.Button>
      <Sidebar.Button
        modifiers={['save']}
        onClick={() => actions.updateLayout({ showDialog: 'saveSession' })}
      >
        Save Session
      </Sidebar.Button>
      {numWorkspaces > 1 ? (
        <Sidebar.Button
          modifiers={['delete']}
          onClick={() =>
            actions.updateLayout({ showDialog: 'deleteWorkspace' })
          }
        >
          Delete Workspace
        </Sidebar.Button>
      ) : null}
    </Sidebar>
  )
}

SidebarComponent.propTypes = {
  activeWorkspace: t.string.isRequired,
  allWorkspaces: t.objectOf(
    t.shape({
      title: t.string,
      markdown: t.string,
      html: t.string,
    })
  ).isRequired,
  numWorkspaces: t.number.isRequired,
  actions: t.shape({
    createWorkspace: t.func.isRequired,
    updateLayout: t.func.isRequired,
    updateSetting: t.func.isRequired,
  }).isRequired,
}

export default SidebarComponent
