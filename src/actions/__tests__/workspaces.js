import {
  CREATE_WORKSPACE,
  DELETE_WORKSPACE,
  INIT_WORKSPACES,
  RESET_WORKSPACES,
  UPDATE_WORKSPACE,
  UPDATE_SETTING,
} from 'constants/actionTypes'
import {
  createWorkspace,
  deleteWorkspace,
  initWorkspaces,
  resetWorkspaces,
  updateWorkspace,
} from '../workspaces'
import { defaultSettings, defaultWorkspace } from 'constants/defaultValues'

let store
let actions
let expectedActions
let payload = {}
let initialState

describe('workspaces actions', () => {
  beforeEach(() => {
    initialState = {
      settings: defaultSettings,
      workspaces: {
        '0': defaultWorkspace,
        '1': defaultWorkspace,
      },
    }
    store = mockStore(initialState)
    payload = { '2': defaultWorkspace }
  })

  it('createWorkspace action', () => {
    store.dispatch(createWorkspace())
    actions = store.getActions()
    expectedActions = [{ type: CREATE_WORKSPACE, payload }]
    expect(actions).toEqual(expectedActions)
  })

  it('deleteWorkspace action', () => {
    store.dispatch(deleteWorkspace())
    actions = store.getActions()
    expectedActions = [
      { type: UPDATE_SETTING, payload: { activeWorkspace: '1' } },
      { type: DELETE_WORKSPACE, payload: '0' },
    ]
    expect(actions).toEqual(expectedActions)
  })

  it('initWorkspaces action', () => {
    expectedActions = { type: INIT_WORKSPACES, payload }
    expect(initWorkspaces(payload)).toEqual(expectedActions)
  })

  it('resetWorkspaces action', () => {
    expectedActions = { type: RESET_WORKSPACES }
    expect(resetWorkspaces()).toEqual(expectedActions)
  })

  it('updateWorkspace action', () => {
    initialState['settings']['activeWorkspace'] = '1'
    store.dispatch(updateWorkspace('html', '<h1>hey</h1>'))
    actions = store.getActions()
    payload = { '1': { ...defaultWorkspace, html: '<h1>hey</h1>' } }
    expectedActions = [{ type: UPDATE_WORKSPACE, payload }]
    expect(actions).toEqual(expectedActions)
  })

  it('updateWorkspace w/ sync action', () => {
    initialState['settings']['activeWorkspace'] = '1'
    initialState['settings']['syncEditors'] = true
    store = mockStore(initialState)
    store.dispatch(updateWorkspace('html', '<h1>hey</h1>'))
    actions = store.getActions()
    payload = {
      '1': { ...defaultWorkspace, html: '<h1>hey</h1>', markdown: '# hey' },
    }
    expectedActions = [{ type: UPDATE_WORKSPACE, payload }]
    expect(actions).toEqual(expectedActions)
  })
})
