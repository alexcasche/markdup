import {
  CREATE_WORKSPACE,
  DELETE_WORKSPACE,
  INIT_WORKSPACES,
  RESET_WORKSPACES,
  UPDATE_WORKSPACE,
} from 'constants/actionTypes'
import { defaultWorkspace } from 'constants/defaultValues'

export const INITIAL_STATE = {
  0: defaultWorkspace,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_WORKSPACE:
      return { ...state, ...action.payload }

    case DELETE_WORKSPACE:
      const { [action.payload]: omit, ...payload } = state
      return { ...payload }

    case INIT_WORKSPACES:
      return { ...action.payload }

    case RESET_WORKSPACES:
      return INITIAL_STATE

    case UPDATE_WORKSPACE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
