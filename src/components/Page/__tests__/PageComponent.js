import PageComponent from '../PageComponent'
import { Page } from 'blocks'

const baseProps = {
  showSettings: false,
  showSidebar: false,
  actions: {
    updateLayout: jest.fn(),
  },
}

let wrapper

describe('PageComponent', () => {
  beforeEach(() => {
    wrapper = shallow(<PageComponent {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders without overlay when show props false', () => {
    expect(wrapper.find(Page.Overlay).exists()).toBeFalsy()
  })

  it('renders with overlay when show props true', () => {
    wrapper.setProps({ showSidebar: true })
    expect(wrapper.find(Page.Overlay).exists()).toBeTruthy()
    wrapper.setProps({ showSidebar: false, showSettings: true })
    expect(wrapper.find(Page.Overlay).exists()).toBeTruthy()
  })

  it('renders with default modifiers', () => {
    expect(wrapper.prop('modifiers')).toEqual([])
    expect(wrapper.prop('modifiers')).toEqual([])
  })

  it('updates pageModifier on prop change', () => {
    wrapper.setProps({ showSidebar: true })
    expect(wrapper.prop('modifiers')).toEqual(['sidebar'])
  })

  it('calls updateLayout on overlay click', () => {
    const { updateLayout } = baseProps.actions
    wrapper.setProps({ showSidebar: true })
    wrapper.find(Page.Overlay).simulate('click')
    expect(updateLayout.mock.calls[0][0]).toEqual({
      showSettings: false,
      showSidebar: false,
    })
  })
})
