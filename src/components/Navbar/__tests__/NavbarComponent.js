import NavbarComponent from '../NavbarComponent'
import { Navbar } from 'blocks'

const baseProps = {
  showSettings: false,
  showSidebar: false,
  actions: {
    toggleLayout: jest.fn(),
  },
}

let wrapper
let burger = {}
let cogwheel = {}

describe('NavbarComponent', () => {
  beforeEach(() => {
    wrapper = shallow(<NavbarComponent {...baseProps} />)
    burger.button = wrapper.find(Navbar.Button).first()
    burger.icon = wrapper.find(Navbar.Burger)
    cogwheel.button = wrapper.find(Navbar.Button).last()
    cogwheel.icon = wrapper.find(Navbar.Cogwheel)
  })
  afterAll(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders with default props', () => {
    expect(wrapper.state()).toMatchObject({
      burgerHover: false,
      cogwheelHover: false,
    })
  })

  it('renders with default state', () => {
    expect(wrapper.state()).toMatchObject({
      burgerHover: false,
      cogwheelHover: false,
    })
  })

  it('updates state on buttonHover', () => {
    wrapper.instance().buttonHover('burger')
    wrapper.instance().buttonHover('cogwheel')
    expect(wrapper.state()).toMatchObject({
      burgerHover: true,
      cogwheelHover: true,
    })
  })

  it('renders with default modifiers', () => {
    expect(burger.icon.prop('modifiers')).toEqual([])
    expect(cogwheel.icon.prop('modifiers')).toEqual([])
  })

  it('sets modifiers on hover state true', () => {
    wrapper.setState({ burgerHover: true, cogwheelHover: true })
    const burgerModifiers = wrapper.instance().buttonModifiers('burger')
    const cogwheelModifiers = wrapper.instance().buttonModifiers('burger')
    expect(burgerModifiers).toEqual(['hover'])
    expect(cogwheelModifiers).toEqual(['hover'])
  })

  it('sets modifiers on menu props true', () => {
    wrapper.setProps({ showSettings: true, showSidebar: true })
    const burgerModifiers = wrapper.instance().buttonModifiers('burger')
    const cogwheelModifiers = wrapper.instance().buttonModifiers('burger')
    expect(burgerModifiers).toEqual(['open'])
    expect(cogwheelModifiers).toEqual(['open'])
  })

  it('calls toggleLayout on button clicks', () => {
    const { toggleLayout } = baseProps.actions
    burger.button.simulate('click')
    cogwheel.button.simulate('click')
    expect(toggleLayout.mock.calls.length).toBe(2)
    expect(toggleLayout.mock.calls[0][0]).toBe('showSidebar')
    expect(toggleLayout.mock.calls[1][0]).toBe('showSettings')
  })
})
