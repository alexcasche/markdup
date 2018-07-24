import { TOGGLE_LAYOUT, UPDATE_LAYOUT } from 'constants/actionTypes'
import { toggleLayout, updateLayout } from '../layouts'

const payload = {
  payload: 'payload',
}

describe('settings actions', () => {
  it('toggleLayout action', () => {
    const expectedAction = { type: TOGGLE_LAYOUT, payload }
    expect(toggleLayout(payload)).toEqual(expectedAction)
  })

  it('updateLayout action', () => {
    const expectedAction = { type: UPDATE_LAYOUT, payload }
    expect(updateLayout(payload)).toEqual(expectedAction)
  })
})
