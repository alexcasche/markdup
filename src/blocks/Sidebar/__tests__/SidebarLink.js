import SidebarLink from '../SidebarLink'
import { shade } from 'polished'

describe('SidebarLink Element', () => {
  it('renders correctly', () => {
    const tree = render(<SidebarLink />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds active modifier', () => {
    const tree = render(<SidebarLink modifiers={['active']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('pointer-events', 'none')
  })
})
