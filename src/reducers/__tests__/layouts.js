import reducer, { INITIAL_STATE } from '../layouts'
import { TOGGLE_LAYOUT, UPDATE_LAYOUT } from 'constants/actionTypes'

describe('layouts reducer', () => {
  it('returns INITIAL_STATE', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('handles TOGGLE_LAYOUT', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: TOGGLE_LAYOUT,
        payload: 'showDialog',
      })
    ).toEqual({
      ...INITIAL_STATE,
      showDialog: true,
    })
  })

  it('handles UPDATE_LAYOUT', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: UPDATE_LAYOUT,
        payload: { showSettings: true },
      })
    ).toEqual({
      ...INITIAL_STATE,
      showSettings: true,
    })
  })
})
