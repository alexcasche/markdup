import DialogComponent from '../DialogComponent'
import { Dialog } from 'blocks'
import { defaultWorkspace } from 'constants/defaultValues'
import { borderStyle } from '../../../../node_modules/polished'

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

describe('DialogComponent', () => {
  beforeEach(() => {
    appendModalRoot()
  })
  afterEach(() => {
    removeModalRoot()
  })

  it('renders without crashing', () => {
    wrapper = mount(<DialogComponent {...baseProps} />)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders Dialog when showDialog set', () => {
    wrapper = mount(<DialogComponent {...baseProps} />)
    const modal = global.document.querySelector('#modal-root')
    expect(modal.childElementCount).toBe(1)
  })

  it('renders null when showDialog false', () => {
    wrapper = mount(<DialogComponent {...baseProps} showDialog={false} />)
    const modal = global.document.querySelector('#modal-root')
    expect(modal.childElementCount).toBe(0)
  })
})
