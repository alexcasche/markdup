import { EditorContainer } from '../EditorContainer'
import EditorComponent from '../EditorComponent'

const baseProps = {
  activeEditor: 'markdown',
  autoSave: true,
  expanded: false,
  html: '<h1>Hello</h1>',
  lang: 'html',
  liveComplete: true,
  markdown: '## Hello',
  splitView: true,
  syncEditors: true,
  actions: {
    updateSetting: jest.fn(),
    updateWorkspace: jest.fn(),
  },
  events: {
    toggleExpand: jest.fn(),
    togglePreview: jest.fn(),
  },
}

let wrapper

describe('EditorContainer', () => {
  beforeAll(() => {
    wrapper = shallow(<EditorContainer {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('passes props to component', () => {
    expect(wrapper.find(EditorComponent).props()).toMatchObject(baseProps)
  })
})
