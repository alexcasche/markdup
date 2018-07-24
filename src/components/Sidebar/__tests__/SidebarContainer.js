import { SidebarContainer } from '../SidebarContainer'
import SidebarComponent from '../SidebarComponent'
import { defaultWorkspace } from 'constants'

const baseProps = {
  activeWorkspace: '0',
  numWorkspaces: 1,
  allWorkspaces: {
    '0': { defaultWorkspace },
  },
  actions: {
    createWorkspace: jest.fn(),
    updateLayout: jest.fn(),
    updateSetting: jest.fn(),
  },
}

let wrapper

describe('SidebarContainer', () => {
  beforeAll(() => {
    wrapper = shallow(<SidebarContainer {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('passes props to component', () => {
    expect(wrapper.find(SidebarComponent).props()).toMatchObject(baseProps)
  })
})
