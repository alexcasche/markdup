import { default as DialogBox } from '../dialogFactory'
import { Dialog } from 'blocks'
import { defaultWorkspace } from 'constants/defaultValues'

const baseProps = {
  currentWorkspace: defaultWorkspace,
  numWorkspaces: 1,
  showDialog: 'deleteWorkspace',
  showSave: true,
  actions: {
    deleteWorkspace: jest.fn(),
    resetSession: jest.fn(),
    saveSession: jest.fn(),
    updateLayout: jest.fn(),
  },
}

let wrapper

describe('dialogFactory function', () => {
  beforeEach(() => {
    wrapper = shallow(<DialogBox {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('calls updateLayout on close click', () => {
    const { updateLayout } = baseProps.actions
    wrapper.find(Dialog.Close).simulate('click')
    expect(updateLayout.mock.calls[0][0]).toEqual({ showDialog: false })
  })

  it('renders deleteWorkspace dialog content', () => {
    const fragments = wrapper
      .find(Dialog.Content)
      .dive()
      .at(0)
    expect(fragments.find(Dialog.Header).prop('children')).toContain(
      'delete this workspace'
    )
    expect(
      fragments
        .find(Dialog.Text)
        .prop('children')
        .join('')
    ).toContain('Workspace: Untitled')
    const { deleteWorkspace } = baseProps.actions
    fragments
      .find(Dialog.Button)
      .last()
      .simulate('click')
    expect(deleteWorkspace.mock.calls.length).toBe(1)
  })

  it('renders resetSession dialog content', () => {
    wrapper.setProps({ showDialog: 'resetSession' })
    const fragments = wrapper
      .find(Dialog.Content)
      .dive()
      .at(0)
    expect(fragments.find(Dialog.Header).prop('children')).toContain(
      'delete this session'
    )
    expect(
      fragments
        .find(Dialog.Text)
        .prop('children')
        .join('')
    ).toContain('Workspaces: 1')
    const { resetSession } = baseProps.actions
    fragments
      .find(Dialog.Button)
      .last()
      .simulate('click')
    expect(resetSession.mock.calls.length).toBe(1)
  })

  it('renders saveSession dialog content', () => {
    wrapper.setProps({ showDialog: 'saveSession' })
    const fragments = wrapper
      .find(Dialog.Content)
      .dive()
      .at(0)
    expect(fragments.find(Dialog.Header).prop('children')).toContain(
      'your browser'
    )
    const { saveSession } = baseProps.actions
    expect(saveSession.mock.calls.length).toBe(1)
  })
})
