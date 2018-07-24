import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
