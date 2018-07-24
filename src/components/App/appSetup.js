import { getSession } from 'utils/localStorage'
import { initSettings, initWorkspaces } from 'actions'

export const appSetup = () => {
  const session = getSession()
  if (session) {
    return dispatch => {
      const { settings, workspaces } = session
      dispatch(initSettings(settings))
      dispatch(initWorkspaces(workspaces))
    }
  } else {
    return null
  }
}
