import { TOGGLE_LAYOUT, UPDATE_LAYOUT } from 'constants/actionTypes'

export const INITIAL_STATE = {
  showDialog: false,
  showSettings: false,
  showSidebar: false,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_LAYOUT:
      let newState = {}
      newState[action.payload] = !state[action.payload]
      return { ...state, ...newState }

    case UPDATE_LAYOUT:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
