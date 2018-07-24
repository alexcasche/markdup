import store from 'store'
import { resetSettings, resetWorkspaces } from 'actions'

export const getSession = () => {
  try {
    const serializedSession = localStorage.getItem('session')
    if (serializedSession === null) {
      return undefined
    } else {
      return JSON.parse(serializedSession)
    }
  } catch (err) {
    return undefined
  }
}

export const resetSession = () => {
  try {
    localStorage.clear()
  } catch (err) {
    return undefined
  } finally {
    store.dispatch(resetSettings)
    store.dispatch(resetWorkspaces)
  }
}

export const saveSession = () => {
  try {
    const session = {
      settings: store.getState().settings,
      workspaces: store.getState().workspaces,
    }
    const serializedSession = JSON.stringify(session)
    localStorage.setItem('session', serializedSession)
  } catch (err) {
    return undefined
  }
}
