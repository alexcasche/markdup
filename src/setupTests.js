import React from 'react'
import Enzyme, { shallow, mount, ReactWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import theme from 'constants/theme'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'
import 'jest-localstorage-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

Enzyme.configure({ adapter: new Adapter() })

const mountWithTheme = component => {
  return mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

const renderWithTheme = component => {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  )
}

const appendModalRoot = () => {
  const modalRoot = global.document.createElement('div')
  modalRoot.setAttribute('id', 'modal-root')
  const body = global.document.querySelector('body')
  body.appendChild(modalRoot)
}

const removeModalRoot = () => {
  const modalRoot = global.document.getElementById('modal-root')
  const body = global.document.querySelector('body')
  body.removeChild(modalRoot)
}

global.React = React
global.shallow = shallow
global.mount = mountWithTheme
global.render = renderWithTheme
global.theme = theme
global.mockStore = mockStore
global.appendModalRoot = appendModalRoot
global.removeModalRoot = removeModalRoot
