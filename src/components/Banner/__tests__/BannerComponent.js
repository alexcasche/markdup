import BannerComponent from '../BannerComponent'
import { Banner } from 'blocks'
import { defaultWorkspace } from 'constants'

const baseProps = {
  activeEditor: 'markdown',
  currentWorkspace: {
    title: 'title',
    markdown: 'markdown',
    html: 'html',
  },
  actions: {
    updateWorkspace: jest.fn(),
  },
}

let wrapper

describe('BannerComponent', () => {
  beforeEach(() => {
    wrapper = shallow(<BannerComponent {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders with lines & character values', () => {
    expect(wrapper.find(Banner.Input).prop('value')).toBe('title')
    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toBe('1')
    expect(
      wrapper
        .find('span')
        .last()
        .text()
    ).toBe('8')
  })

  it('calls updateWorkspace on input change', () => {
    const { updateWorkspace } = baseProps.actions
    wrapper
      .find(Banner.Input)
      .simulate('change', { target: { value: 'value' } })
    expect(updateWorkspace.mock.calls[0][0]).toBe('title')
    expect(updateWorkspace.mock.calls[0][1]).toBe('value')
  })
})
