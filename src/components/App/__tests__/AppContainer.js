import { AppContainer } from '../AppContainer'
import AppComponent from '../AppComponent'
import { defaultSettings, defaultWorkspaces } from 'constants/defaultValues'

const baseProps = {
  allSettings: defaultSettings,
  allWorkspaces: { 0: defaultWorkspaces },
  actions: {
    appSetup: jest.fn(),
    saveSession: jest.fn(),
  },
}

let wrapper

describe('AppContainer', () => {
  beforeEach(() => {
    wrapper = shallow(<AppContainer {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('passes props to component', () => {
    expect(wrapper.find(AppComponent).props()).toEqual(baseProps)
  })
})
