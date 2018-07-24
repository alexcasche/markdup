export const getAllWorkspaces = state => {
  return state.workspaces
}

export const getCurrentWorkspace = state => {
  const { activeWorkspace } = state.settings
  return state.workspaces[activeWorkspace]
}

export const getCurrentWorkspaceVal = (state, key) => {
  const activeWorkspace = getCurrentWorkspace(state)
  return activeWorkspace[key]
}

export const getNextWorkspaceId = state => {
  const activeId = parseInt(state.settings.activeWorkspace, 10)
  const workspaceIds = getWorkspaceIds(state)
  const filteredIds = workspaceIds.filter(item => item !== activeId)
  return Math.min(...filteredIds).toString()
}

export const getNumWorkspaces = state => {
  return Object.keys(state.workspaces).length
}

export const getUniqueWorkspaceId = state => {
  const workspaceIds = getWorkspaceIds(state)
  return (Math.max(...workspaceIds) + 1).toString()
}

export const getWorkspaceIds = state => {
  return Object.keys(state.workspaces).map(item => parseInt(item, 10))
}
