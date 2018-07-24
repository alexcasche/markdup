import {
  getAllWorkspaces,
  getCurrentWorkspace,
  getCurrentWorkspaceVal,
  getNextWorkspaceId,
  getNumWorkspaces,
  getUniqueWorkspaceId,
  getWorkspaceIds,
} from '../workspaces'
import { defaultWorkspace } from 'constants/defaultValues'

let state

describe('workspaces selectors', () => {
  beforeEach(() => {
    state = {
      settings: {
        activeWorkspace: '1',
      },
      workspaces: {
        '0': defaultWorkspace,
        '1': { ...defaultWorkspace, title: 'title' },
      },
    }
  })

  it('getAllWorkspaces selector', () => {
    expect(getAllWorkspaces(state)).toEqual(state.workspaces)
  })

  it('getCurrentWorkspace selector', () => {
    expect(getCurrentWorkspace(state)).toEqual(state.workspaces['1'])
  })

  it('getCurrentWorkspaceVal selector', () => {
    expect(getCurrentWorkspaceVal(state, 'title')).toBe('title')
  })

  it('getNextWorkspaceId selector', () => {
    expect(getNextWorkspaceId(state)).toEqual('0')
  })

  it('getNumWorkspaces selector', () => {
    expect(getNumWorkspaces(state)).toBe(2)
  })

  it('getUniqueWorkspaceId selector', () => {
    expect(getUniqueWorkspaceId(state)).toBe('2')
  })

  it('getWorkspaceIds selector', () => {
    expect(getWorkspaceIds(state)).toEqual([0, 1])
  })
})
