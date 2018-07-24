import { DialogContainer } from '../DialogContainer'
import DialogComponent from '../DialogComponent'
import { defaultWorkspace } from 'constants/defaultValues'

const baseProps = {
  currentWorkspace: defaultWorkspace,
  numWorkspaces: 1,
  showDialog: false,
  showSave: true,
  actions: {
    deleteWorkspace: jest.fn(),
    resetSession: jest.fn(),
    saveSession: jest.fn(),
    updateLayout: jest.fn(),
  },
}

let wrapper

describe('DialogContainer', () => {
  beforeAll(() => {
    wrapper = shallow(<DialogContainer {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('passes props to component', () => {
    expect(wrapper.find(DialogComponent).props()).toEqual(baseProps)
  })
})
