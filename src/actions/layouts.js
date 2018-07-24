import { TOGGLE_LAYOUT, UPDATE_LAYOUT } from 'constants/actionTypes'

export function toggleLayout(payload) {
  return { type: TOGGLE_LAYOUT, payload }
}

export function updateLayout(payload) {
  return { type: UPDATE_LAYOUT, payload }
}
