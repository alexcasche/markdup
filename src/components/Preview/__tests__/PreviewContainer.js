import { PreviewContainer } from '../PreviewContainer'
import PreviewComponent from '../PreviewComponent'

const baseProps = {
  activeEditor: 'markdown',
  expanded: false,
  html: '<h1>Hello</h1>',
  markdown: '# Goodbye',
  events: {
    toggleExpand: jest.fn(),
    togglePreview: jest.fn(),
  },
}

let wrapper

describe('PreviewContainer', () => {
  beforeAll(() => {
    wrapper = shallow(<PreviewContainer {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('passes props to component', () => {
    expect(wrapper.find(PreviewComponent).props()).toMatchObject(baseProps)
  })
})
