import PreviewComponent from '../PreviewComponent'
import { Preview } from 'blocks'
import Highlight from 'react-highlight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExpandArrowsAlt,
  faEyeSlash,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

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

describe('PreviewComponent', () => {
  beforeEach(() => {
    wrapper = shallow(<PreviewComponent {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders with correct modifiers', () => {
    expect(wrapper.find(Preview.Header).prop('modifiers')).toEqual([])
    expect(wrapper.find(Preview.Content).prop('modifiers')).toEqual([])
    wrapper.setProps({ expanded: true })
    expect(wrapper.find(Preview.Header).prop('modifiers')).toEqual(['expanded'])
    expect(wrapper.find(Preview.Content).prop('modifiers')).toEqual([
      'expanded',
    ])
  })

  it('renders with correct preview', () => {
    expect(wrapper.find(Highlight).prop('children')).toEqual('<h1>Goodbye</h1>')
    wrapper.setProps({ activeEditor: 'html' })
    expect(wrapper.find(Highlight).prop('children')).toEqual('<h1>Hello</h1>')
  })

  it('renders with correct buttons', () => {
    expect(
      wrapper
        .find(Preview.Button)
        .first()
        .find(FontAwesomeIcon)
        .prop('icon')
    ).toBe(faEyeSlash)
    expect(
      wrapper
        .find(Preview.Button)
        .last()
        .find(FontAwesomeIcon)
        .prop('icon')
    ).toBe(faExpandArrowsAlt)
    wrapper.setProps({ expanded: true })
    expect(
      wrapper
        .find(Preview.Button)
        .last()
        .find(FontAwesomeIcon)
        .prop('icon')
    ).toBe(faTimes)
  })

  it('calls correct functions on click', () => {
    const { toggleExpand, togglePreview } = baseProps.events
    wrapper
      .find(Preview.Button)
      .first()
      .simulate('click')
    wrapper
      .find(Preview.Button)
      .last()
      .simulate('click')
    expect(togglePreview.mock.calls.length).toBe(1)
    expect(toggleExpand.mock.calls[0][0]).toBe('preview')
  })
})
