import { default as Menu } from '../menuFactory'
import { Sidebar } from 'blocks'
import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defaultWorkspace } from 'constants'
import {
  faCode,
  faCheckCircle,
  faFileAlt,
  faLink,
} from '@fortawesome/free-solid-svg-icons'

const baseProps = {
  activeWorkspace: '0',
  allWorkspaces: {
    '0': { defaultWorkspace },
    '1': { defaultWorkspace },
  },
  menu: 'workspaces',
  updateSetting: jest.fn(),
}

let wrapper

describe('menuFactory function', () => {
  beforeEach(() => {
    wrapper = shallow(<Menu {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders with correct trigger', () => {
    let trigger = wrapper
      .find(Collapsible)
      .dive()
      .find(Sidebar.Trigger)
    expect(
      trigger
        .find(FontAwesomeIcon)
        .first()
        .prop('icon')
    ).toBe(faCode)
    expect(trigger.find('span').text()).toBe('workspaces')
    wrapper.setProps({ menu: 'resources' })
    trigger = wrapper
      .find(Collapsible)
      .dive()
      .find(Sidebar.Trigger)
    expect(
      trigger
        .find(FontAwesomeIcon)
        .first()
        .prop('icon')
    ).toBe(faFileAlt)
    expect(trigger.find('span').text()).toBe('resources')
  })

  it('renders with correct links', () => {
    let links = wrapper.find(Sidebar.Link)
    expect(links.first().prop('modifiers')).toEqual(['active'])
    expect(links.last().prop('modifiers')).toEqual([])
    expect(
      links
        .first()
        .find(FontAwesomeIcon)
        .prop('icon')
    ).toBe(faCheckCircle)
    wrapper.setProps({ menu: 'resources' })
    links = wrapper.find(Sidebar.Link)
    expect(links.first().prop('modifiers')).toEqual([])
    expect(links.last().prop('modifiers')).toEqual([])
    expect(links.first().prop('target')).toBe('_blank')
    expect(
      links
        .first()
        .find(FontAwesomeIcon)
        .prop('icon')
    ).toBe(faLink)
  })

  it('calls updateSetting function on workspaces click', () => {
    const { updateSetting } = baseProps
    let links = wrapper.find(Sidebar.Link)
    links.first().simulate('click')
    links.last().simulate('click')
    expect(updateSetting.mock.calls[0][0]).toEqual({ activeWorkspace: '0' })
    expect(updateSetting.mock.calls[1][0]).toEqual({ activeWorkspace: '1' })
  })
})
