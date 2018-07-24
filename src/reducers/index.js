import { combineReducers } from 'redux'
import layouts from './layouts'
import settings from './settings'
import workspaces from './workspaces'

const rootReducer = combineReducers({
  layouts,
  settings,
  workspaces,
})

export default rootReducer
