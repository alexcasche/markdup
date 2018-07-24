import SidebarComponent from '../SidebarComponent'
import { Sidebar } from 'blocks'
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
  beforeEach(() => {
    wrapper = shallow(<SidebarComponent {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders with default buttons', () => {
    expect(wrapper.find(Sidebar.Button)).toHaveLength(2)
    expect(
      wrapper
        .find(Sidebar.Button)
        .first()
        .prop('modifiers')
    ).toEqual(['new'])
    expect(
      wrapper
        .find(Sidebar.Button)
        .last()
        .prop('modifiers')
    ).toEqual(['save'])
  })

  it('renders with delete button when numWorkspaces > 1', () => {
    wrapper.setProps({ ...baseProps, numWorkspaces: 2 })
    expect(
      wrapper
        .find(Sidebar.Button)
        .last()
        .prop('modifiers')
    ).toEqual(['delete'])
  })

  it('calls actions on button clicks', () => {
    wrapper.setProps({ ...baseProps, numWorkspaces: 2 })
    wrapper
      .find(Sidebar.Button)
      .first()
      .simulate('click')
    wrapper
      .find(Sidebar.Button)
      .at(1)
      .simulate('click')
    wrapper
      .find(Sidebar.Button)
      .last()
      .simulate('click')
    const { createWorkspace, updateLayout } = baseProps.actions
    expect(createWorkspace.mock.calls.length).toBe(1)
    expect(updateLayout.mock.calls[0][0]).toEqual({ showDialog: 'saveSession' })
    expect(updateLayout.mock.calls[1][0]).toEqual({
      showDialog: 'deleteWorkspace',
    })
  })
})
