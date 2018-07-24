import { getSession, resetSession, saveSession } from '../localStorage'
import { defaultSettings, defaultWorkspace } from 'constants/defaultValues'

let store
let initialState

describe('localStorage functions', () => {
  beforeEach(() => {
    initialState = {
      settings: defaultSettings,
      workspaces: { 0: defaultWorkspace },
    }
    jest.clearAllMocks()
    store = mockStore()
    saveSession()
  })

  it('gets session from localStorage', () => {
    expect(getSession()).toMatchObject(initialState)
  })

  it('resets local storage', () => {
    resetSession()
    expect(localStorage.clear).toHaveBeenCalledTimes(1)
    expect(localStorage.length).toBe(0)
    expect(getSession()).toBe(undefined)
  })

  it('saves session to localStorage', () => {
    jest.clearAllMocks()
    saveSession()
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      'session',
      JSON.stringify(initialState)
    )
  })
})
