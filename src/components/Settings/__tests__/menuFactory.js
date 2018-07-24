import { default as Menu } from '../menuFactory'
import { Settings } from 'blocks'

const baseProps = {
  settingsLinks: {
    autoSave: true,
    syncEditors: false,
  },
  toggleSetting: jest.fn(),
}

let wrapper
let fragments

describe('menuFactory function', () => {
  beforeEach(() => {
    wrapper = shallow(<Menu {...baseProps} />)
    fragments = [
      wrapper
        .at(0)
        .find(Settings.Link)
        .first(),
      wrapper
        .at(0)
        .find(Settings.Link)
        .last(),
    ]
  })
  afterAll(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders with correct link', () => {
    expect(fragments[0].prop('children')[0]).toBe('auto save')
    expect(fragments[1].prop('children')[0]).toBe('sync editors')
  })

  it('renders with correct toggle', () => {
    expect(fragments[0].prop('children')[1].props.checked).toBe(true)
    expect(fragments[0].prop('children')[1].props.modifiers).toEqual([
      'checked',
    ])
    expect(fragments[1].prop('children')[1].props.checked).toBe(false)
    expect(fragments[1].prop('children')[1].props.modifiers).toEqual([])
  })

  it('calls toggleSetting on link click', () => {
    const { toggleSetting } = baseProps
    fragments[0].simulate('click')
    fragments[1].simulate('click')
    expect(toggleSetting.mock.calls[0][0]).toEqual('autoSave')
    expect(toggleSetting.mock.calls[1][0]).toEqual('syncEditors')
  })
})
