import {
  INIT_SETTINGS,
  RESET_SETTINGS,
  TOGGLE_SETTING,
  UPDATE_SETTING,
} from '../constants/actionTypes'

export function initSettings(payload) {
  return { type: INIT_SETTINGS, payload }
}

export function resetSettings() {
  return { type: RESET_SETTINGS }
}

export function toggleSetting(payload) {
  return { type: TOGGLE_SETTING, payload }
}

export function updateSetting(payload) {
  return { type: UPDATE_SETTING, payload }
}
