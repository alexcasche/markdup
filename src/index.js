import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from 'styled-components'
import theme from 'constants/theme'
import 'constants/globalStyles'
import { App } from 'components'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app-root')
)
