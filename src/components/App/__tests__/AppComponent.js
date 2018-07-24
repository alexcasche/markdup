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

describe('AppComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AppComponent {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('componentDidMount calls appSetup', () => {
    const { appSetup } = baseProps.actions
    expect(appSetup).toHaveBeenCalled()
  })

  it('componentDidUpdate calls saveSession w/ autoSave', () => {
    const { saveSession } = baseProps.actions
    const nextProps = { ...baseProps, test: 'test' }
    wrapper.instance().componentDidUpdate(nextProps, null)
    expect(saveSession.mock.calls.length).toBe(1)
  })

  it('componentDidUpdate ignores saveSession w/ !autoSave', () => {
    const { saveSession } = baseProps.actions
    const nextProps = {
      ...baseProps,
      allSettings: {
        ...baseProps.allSettings,
        autoSave: false,
      },
    }
    wrapper.instance().componentDidUpdate(nextProps, null)
    expect(saveSession.mock.calls.length).toBe(0)
  })
})
