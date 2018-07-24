import { SettingsContainer } from '../SettingsContainer'
import SettingsComponent from '../SettingsComponent'

const baseProps = {
  showSettings: false,
  settingsLinks: {
    autoSave: true,
    liveComplete: true,
    splitView: false,
    syncEditors: false,
  },
  actions: {
    toggleSetting: jest.fn(),
    updateLayout: jest.fn(),
  },
}

let wrapper

describe('SettingsContainer', () => {
  beforeAll(() => {
    wrapper = shallow(<SettingsContainer {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('passes props to component', () => {
    expect(wrapper.find(SettingsComponent).props()).toMatchObject(baseProps)
  })
})
