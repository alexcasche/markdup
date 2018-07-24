import ReflexComponent from '../ReflexComponent'
import Editor from '../../Editor/EditorContainer'
import Preview from '../../Preview/PreviewContainer'
import { Reflex } from 'blocks'

const baseProps = {
  splitView: true,
}

let wrapper

describe('ReflexComponent', () => {
  beforeEach(() => {
    wrapper = shallow(<ReflexComponent {...baseProps} />)
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correct children based on splitView', () => {
    expect(wrapper.find(Reflex.Box)).toHaveLength(4)
    expect(wrapper.find(Reflex.Split)).toHaveLength(2)
    wrapper.setProps({ splitView: false })
    expect(wrapper.find(Reflex.Box)).toHaveLength(3)
    expect(wrapper.find(Reflex.Split)).toHaveLength(1)
  })

  it('renders with correct containerModifiers', () => {
    expect(
      wrapper
        .find(Reflex)
        .at(0)
        .prop('modifiers')
    ).toEqual([])
    wrapper.setState({ mobilePreview: true, expanded: false })
    expect(
      wrapper
        .find(Reflex)
        .at(0)
        .prop('modifiers')
    ).toEqual(['mobilePreview'])
    wrapper.setState({ expanded: true })
    expect(
      wrapper
        .find(Reflex)
        .at(0)
        .prop('modifiers')
    ).toEqual([])
  })

  it('render with correct boxModifers', () => {
    expect(
      wrapper
        .find(Reflex.Box)
        .at(1)
        .prop('modifiers')
    ).toEqual([])
    expect(
      wrapper
        .find(Reflex.Box)
        .at(2)
        .prop('modifiers')
    ).toEqual([])
    expect(
      wrapper
        .find(Reflex.Box)
        .at(3)
        .prop('modifiers')
    ).toEqual([])
    wrapper.setState({ expanded: 'editor1' })
    expect(
      wrapper
        .find(Reflex.Box)
        .at(1)
        .prop('modifiers')
    ).toEqual(['expanded'])
    wrapper.setState({ expanded: 'editor2' })
    expect(
      wrapper
        .find(Reflex.Box)
        .at(2)
        .prop('modifiers')
    ).toEqual(['expanded'])
    wrapper.setState({ expanded: 'preview' })
    expect(
      wrapper
        .find(Reflex.Box)
        .at(3)
        .prop('modifiers')
    ).toEqual(['expanded'])
  })

  it('render with correct expanded props', () => {
    expect(
      wrapper
        .find(Editor)
        .at(0)
        .prop('expanded')
    ).toBe(false)
    expect(
      wrapper
        .find(Editor)
        .at(1)
        .prop('expanded')
    ).toBe(false)
    expect(wrapper.find(Preview).prop('expanded')).toBe(false)
    wrapper.setState({ expanded: 'editor1' })
    expect(
      wrapper
        .find(Editor)
        .at(0)
        .prop('expanded')
    ).toBe(true)
    wrapper.setState({ expanded: 'editor2' })
    expect(
      wrapper
        .find(Editor)
        .at(1)
        .prop('expanded')
    ).toBe(true)
    wrapper.setState({ expanded: 'preview' })
    expect(wrapper.find(Preview).prop('expanded')).toBe(true)
  })

  it('updates state onResize & onStopResize methods', () => {
    wrapper.instance().onResize()
    expect(wrapper.state('resizing')).toBe(true)
    wrapper.instance().onStopResize()
    expect(wrapper.state('resizing')).toBe(false)
  })

  it('updates state toggleExpand method', () => {
    wrapper.instance().toggleExpand('editor1')
    expect(wrapper.state('expanded')).toBe('editor1')
    wrapper.instance().toggleExpand('editor1')
    expect(wrapper.state('expanded')).toBe(false)
    wrapper.instance().toggleExpand('editor2')
    expect(wrapper.state('expanded')).toBe('editor2')
    wrapper.instance().toggleExpand('editor2')
    expect(wrapper.state('expanded')).toBe(false)
    wrapper.instance().toggleExpand('preview')
    expect(wrapper.state('expanded')).toBe('preview')
    wrapper.instance().toggleExpand('preview')
    expect(wrapper.state('expanded')).toBe(false)
  })

  it('updates state togglePreview method', () => {
    wrapper.instance().togglePreview()
    expect(wrapper.state('mobilePreview')).toBe(true)
    wrapper.instance().togglePreview()
    expect(wrapper.state('mobilePreview')).toBe(false)
  })
})
