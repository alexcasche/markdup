import {
  initSettings,
  resetSettings,
  toggleSetting,
  updateSetting,
} from '../settings'
import {
  INIT_SETTINGS,
  RESET_SETTINGS,
  TOGGLE_SETTING,
  UPDATE_SETTING,
} from 'constants/actionTypes'

const payload = {
  payload: 'payload',
}

describe('settings actions', () => {
  it('initSettings action', () => {
    const expectedAction = { type: INIT_SETTINGS, payload }
    expect(initSettings(payload)).toEqual(expectedAction)
  })

  it('resetSettings action', () => {
    const expectedAction = { type: RESET_SETTINGS }
    expect(resetSettings()).toEqual(expectedAction)
  })

  it('toggleSetting action', () => {
    const expectedAction = { type: TOGGLE_SETTING, payload }
    expect(toggleSetting(payload)).toEqual(expectedAction)
  })

  it('updateSetting action', () => {
    const expectedAction = { type: UPDATE_SETTING, payload }
    expect(updateSetting(payload)).toEqual(expectedAction)
  })
})
