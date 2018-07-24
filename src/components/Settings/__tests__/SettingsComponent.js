import SettingsComponent from '../SettingsComponent'
import { Settings } from 'blocks'

const baseProps = {
  settingsLinks: {
    autoSave: true,
    liveComplete: true,
    splitView: false,
    syncEditors: false,
  },
  showSettings: true,
  actions: {
    toggleSetting: jest.fn(),
    updateLayout: jest.fn(),
  },
}

let wrapper

describe('SettingsComponent', () => {
  beforeEach(() => {
    wrapper = shallow(<SettingsComponent {...baseProps} />)
  })
  afterEach(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders children when showSettings true', () => {
    expect(wrapper.children().exists()).toBeTruthy()
  })

  it('renders no children when showSettings false', () => {
    wrapper.setProps({ showSettings: false })
    expect(wrapper.children().exists()).toBeFalsy()
  })

  it('calls updateLayout on reset session click', () => {
    const link = wrapper.find(Settings.Link).last()
    const { updateLayout } = baseProps.actions
    expect(link.children().text()).toContain('reset session')
    link.simulate('click')
    expect(updateLayout.mock.calls[0][0]).toMatchObject({
      showDialog: 'resetSession',
    })
  })
})
