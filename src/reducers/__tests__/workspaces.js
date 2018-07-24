import reducer, { INITIAL_STATE } from '../workspaces'
import {
  CLEAR_WORKSPACES,
  CREATE_WORKSPACE,
  DELETE_WORKSPACE,
  INIT_WORKSPACES,
  UPDATE_WORKSPACE,
} from 'constants/actionTypes'

describe('workspaces reducer', () => {
  it('returns INITIAL_STATE', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('handles CLEAR_WORKSPACES', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: CLEAR_WORKSPACES,
      })
    ).toEqual(INITIAL_STATE)
  })

  it('handles CREATE_WORKSPACE', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: CREATE_WORKSPACE,
        payload: { '1': { title: 'newWorkspace' } },
      })
    ).toEqual({
      ...INITIAL_STATE,
      '1': { title: 'newWorkspace' },
    })
  })

  it('handles DELETE_WORKSPACE', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: DELETE_WORKSPACE,
        payload: '0',
      })
    ).toEqual({})
  })

  it('handles INIT_WORKSPACES', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: INIT_WORKSPACES,
        payload: { '1': { title: 'newWorkspace' } },
      })
    ).toEqual({
      '1': { title: 'newWorkspace' },
    })
  })

  it('handles UPDATE_WORKSPACE', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: UPDATE_WORKSPACE,
        payload: { '0': { title: 'newWorkspace' } },
      })
    ).toEqual({
      ...INITIAL_STATE,
      '0': { title: 'newWorkspace' },
    })
  })
})
