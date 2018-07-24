import SidebarButton from '../SidebarButton'
import { shade } from 'polished'

describe('SidebarButton Element', () => {
  it('renders correctly', () => {
    const tree = render(<SidebarButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds new modifier', () => {
    const tree = render(<SidebarButton modifiers={['new']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule(
      'background-color',
      shade(0.85, theme.colors.blue)
    )
  })

  it('adds save modifier', () => {
    const tree = render(<SidebarButton modifiers={['save']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule(
      'background-color',
      shade(0.85, theme.colors.green)
    )
  })

  it('adds delete modifier', () => {
    const tree = render(<SidebarButton modifiers={['delete']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule(
      'border',
      `1px solid ${shade(0.75, theme.colors.grey)}`
    )
  })
})
