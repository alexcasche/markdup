import EditorComponent from '../EditorComponent'
import { Editor } from 'blocks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faExpandArrowsAlt,
  faFont,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const baseProps = {
  activeEditor: 'markdown',
  autoSave: true,
  expanded: false,
  html: '<h1>Hello</h1>',
  lang: 'html',
  liveComplete: true,
  markdown: '## Hello',
  splitView: false,
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

describe('EditorComponent', () => {
  beforeEach(() => {
    wrapper = shallow(<EditorComponent {...baseProps} />)
    wrapper.setState({ editor: { focus: () => null } })
  })
  afterEach(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders with correct title', () => {
    expect(wrapper.find(Editor.Title).prop('children')).toContain('markdown')
    wrapper.setProps({ splitView: true })
    expect(wrapper.find(Editor.Title).prop('children')).toContain('html')
  })

  it('renders with correct buttons', () => {
    expect(wrapper.find(Editor.Button)).toHaveLength(4)
    wrapper.setProps({ expanded: true, splitView: true })
    expect(wrapper.find(Editor.Button)).toHaveLength(2)
  })

  it('renders with correct modifiers', () => {
    expect(wrapper.find(Editor.Header).prop('modifiers')).toEqual([])
    expect(wrapper.find(Editor.Content).prop('modifiers')).toEqual([])
    expect(wrapper.find(Editor.Copy).prop('modifiers')).toEqual([])
    wrapper.setProps({ expanded: true })
    wrapper.setState({ showCopy: true })
    expect(wrapper.find(Editor.Header).prop('modifiers')).toEqual(['expanded'])
    expect(wrapper.find(Editor.Content).prop('modifiers')).toEqual(['expanded'])
    expect(wrapper.find(Editor.Copy).prop('modifiers')).toEqual(['visible'])
  })

  it('renders with correct icons', () => {
    expect(
      wrapper
        .find(FontAwesomeIcon)
        .at(2)
        .prop('icon')
    ).toBe(faCode)
    expect(
      wrapper
        .find(FontAwesomeIcon)
        .last()
        .prop('icon')
    ).toBe(faExpandArrowsAlt)
    wrapper.setProps({ activeEditor: 'html', expanded: true })
    expect(
      wrapper
        .find(FontAwesomeIcon)
        .at(2)
        .prop('icon')
    ).toBe(faFont)
    expect(
      wrapper
        .find(FontAwesomeIcon)
        .last()
        .prop('icon')
    ).toBe(faTimes)
  })

  it('should toggle showCopy on copyClipboard method', () => {
    expect(wrapper.state('showCopy')).toBe(false)
    wrapper.instance().copyClipboard()
    expect(wrapper.state('showCopy')).toBe(true)
  })

  it('should call togglePreview method & togglePreview event', () => {
    const { togglePreview } = baseProps.events
    wrapper.instance().togglePreview()
    expect(togglePreview.mock.calls.length).toBe(1)
    wrapper
      .find(Editor.Button)
      .at(2)
      .simulate('click')
    expect(togglePreview.mock.calls.length).toBe(2)
  })

  it('should call toggleExpand event', () => {
    const { toggleExpand } = baseProps.events
    wrapper
      .find(Editor.Button)
      .last()
      .simulate('click')
    expect(toggleExpand.mock.calls.length).toBe(1)
  })

  it('should call updateSetting action', () => {
    const { updateSetting } = baseProps.actions
    wrapper
      .find(Editor.Button)
      .at(1)
      .simulate('click')
    expect(updateSetting.mock.calls[0][0]).toEqual({ activeEditor: 'html' })
    wrapper.setProps({ activeEditor: 'html' })
    wrapper
      .find(Editor.Button)
      .at(1)
      .simulate('click')
    expect(updateSetting.mock.calls[1][0]).toEqual({ activeEditor: 'markdown' })
  })

  it('should trigger updateWorkspace on editor change', () => {
    const { updateWorkspace } = baseProps.actions
    wrapper.find(Editor.Ace).simulate('change', 'val')
    expect(updateWorkspace.mock.calls[0][0]).toBe('markdown')
    expect(updateWorkspace.mock.calls[0][1]).toBe('val')
  })

  it('should trigger updateSetting on editor focus & splitView', () => {
    const { updateSetting } = baseProps.actions
    wrapper.setProps({ splitView: true })
    wrapper.find(Editor.Ace).simulate('focus')
    expect(updateSetting.mock.calls[0][0]).toEqual({ activeEditor: 'html' })
    expect(updateSetting.mock.calls.length).toBe(1)
    wrapper.setProps({ splitView: false })
    wrapper.find(Editor.Ace).simulate('focus')
    expect(updateSetting.mock.calls.length).toBe(1)
  })
})
