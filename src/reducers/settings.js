import {
  INIT_SETTINGS,
  RESET_SETTINGS,
  TOGGLE_SETTING,
  UPDATE_SETTING,
} from 'constants/actionTypes'
import { defaultSettings } from 'constants/defaultValues'

export const INITIAL_STATE = {
  ...defaultSettings,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INIT_SETTINGS:
      return { ...state, ...action.payload }

    case RESET_SETTINGS:
      return INITIAL_STATE

    case TOGGLE_SETTING:
      const newState = {}
      newState[action.payload] = !state[action.payload]
      return { ...state, ...newState }

    case UPDATE_SETTING:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
