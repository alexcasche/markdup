import reducer, { INITIAL_STATE } from '../settings'
import {
  INIT_SETTINGS,
  RESET_SETTINGS,
  TOGGLE_SETTING,
  UPDATE_SETTING,
} from 'constants/actionTypes'

describe('settings reducer', () => {
  it('returns INITIAL_STATE', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('handles INIT_SETTINGS', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: INIT_SETTINGS,
        payload: { activeEditor: '1' },
      })
    ).toEqual({
      ...INITIAL_STATE,
      activeEditor: '1',
    })
  })

  it('handles RESET_SETTINGS', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: RESET_SETTINGS,
      })
    ).toEqual(INITIAL_STATE)
  })

  it('handles TOGGLE_SETTING', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: TOGGLE_SETTING,
        payload: 'autoSave',
      })
    ).toEqual({
      ...INITIAL_STATE,
      autoSave: false,
    })
  })

  it('handles UPDATE_SETTING', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: UPDATE_SETTING,
        payload: { activeEditor: 'html' },
      })
    ).toEqual({
      ...INITIAL_STATE,
      activeEditor: 'html',
    })
  })
})
