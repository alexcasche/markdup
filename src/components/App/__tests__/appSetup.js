import { appSetup } from '../appSetup'
import { defaultSettings, defaultWorkspace } from 'constants/defaultValues'
import { saveSession, resetSession } from 'utils/localStorage'
import { INIT_SETTINGS, INIT_WORKSPACES } from 'constants/actionTypes'

let store
let initialState
let actions
let expectedActions

describe('localStorage functions', () => {
  beforeEach(() => {
    initialState = {
      settings: defaultSettings,
      workspaces: { 0: defaultWorkspace },
    }
    jest.clearAllMocks()
    store = mockStore()
  })

  it('returns null if session empty', () => {
    store.dispatch(appSetup())
    actions = store.getActions()
    expect(actions).toEqual([])
  })

  it('saves settings to store', () => {
    saveSession()
    store.dispatch(appSetup())
    actions = store.getActions()
    expectedActions = [
      { type: INIT_SETTINGS, payload: initialState.settings },
      { type: INIT_WORKSPACES, payload: initialState.workspaces },
    ]
    expect(actions).toEqual(expectedActions)
  })
})
