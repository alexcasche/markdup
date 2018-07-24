import { BannerContainer } from '../BannerContainer'
import BannerComponent from '../BannerComponent'

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

describe('BannerContainer', () => {
  beforeAll(() => {
    wrapper = shallow(<BannerContainer {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('passes props to component', () => {
    expect(wrapper.find(BannerComponent).props()).toEqual(baseProps)
  })
})
