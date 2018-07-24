import { NavbarContainer } from '../NavbarContainer'
import NavbarComponent from '../NavbarComponent'

const baseProps = {
  showSettings: false,
  showSidebar: false,
  actions: {
    toggleLayout: jest.fn(),
  },
}

let wrapper

describe('NavbarContainer', () => {
  beforeAll(() => {
    wrapper = shallow(<NavbarContainer {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('passes props to component', () => {
    expect(wrapper.find(NavbarComponent).props()).toMatchObject(baseProps)
  })
})
