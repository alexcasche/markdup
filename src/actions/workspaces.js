import {
  CREATE_WORKSPACE,
  DELETE_WORKSPACE,
  INIT_WORKSPACES,
  RESET_WORKSPACES,
  UPDATE_WORKSPACE,
} from 'constants/actionTypes'
import {
  getCurrentWorkspace,
  getNextWorkspaceId,
  getUniqueWorkspaceId,
  getSettingVal,
} from 'selectors'
import { updateSetting } from 'actions'
import { defaultWorkspace } from 'constants/defaultValues'
import { syncEditors } from 'utils/syncEditors'

export function createWorkspace() {
  return (dispatch, getState) => {
    const state = getState()
    const id = getUniqueWorkspaceId(state)
    const payload = { [id]: defaultWorkspace }
    return dispatch(createWorkspaceDispatch(payload))
  }
}
const createWorkspaceDispatch = payload => {
  return { type: CREATE_WORKSPACE, payload }
}

export function initWorkspaces(payload) {
  return { type: INIT_WORKSPACES, payload }
}

export function deleteWorkspace() {
  return (dispatch, getState) => {
    const state = getState()
    const payload = getSettingVal(state, 'activeWorkspace')
    const nextWorkspace = getNextWorkspaceId(state)
    dispatch(updateSetting({ activeWorkspace: nextWorkspace }))
    dispatch(deleteWorkspaceDispatch(payload))
  }
}
const deleteWorkspaceDispatch = payload => {
  return { type: DELETE_WORKSPACE, payload }
}

export function updateWorkspace(key, val) {
  return (dispatch, getState) => {
    const state = getState()
    const activeWorkspace = getSettingVal(state, 'activeWorkspace')
    const currentWorkspace = getCurrentWorkspace(state)
    const syncTrue = getSettingVal(state, 'syncEditors')
    let payload = {}
    let newVals = {}
    if (syncTrue) newVals = syncEditors(key, val)
    newVals[key] = val
    payload[activeWorkspace] = { ...currentWorkspace, ...newVals }
    return dispatch(updateWorkspaceDispatch(payload))
  }
}
const updateWorkspaceDispatch = payload => {
  return { type: UPDATE_WORKSPACE, payload }
}

export function resetWorkspaces() {
  return { type: RESET_WORKSPACES }
}
