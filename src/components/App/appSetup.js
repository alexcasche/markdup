import { getSession } from 'utils/localStorage'
import { initSettings, initWorkspaces } from 'actions'

export const appSetup = () => {
  const session = getSession()
  return dispatch => {
    if (session) {
      const { settings, workspaces } = session
      dispatch(initSettings(settings))
      dispatch(initWorkspaces(workspaces))
    }
  }
}