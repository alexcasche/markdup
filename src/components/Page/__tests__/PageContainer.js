import { PageContainer } from '../PageContainer'
import PageComponent from '../PageComponent'

const baseProps = {
  showSettings: false,
  showSidebar: false,
  actions: {
    updateLayout: jest.fn(),
  },
}

let wrapper

describe('PageContainer', () => {
  beforeAll(() => {
    wrapper = shallow(<PageContainer {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('passes props to component', () => {
    expect(wrapper.find(PageComponent).props()).toMatchObject(baseProps)
  })
})
