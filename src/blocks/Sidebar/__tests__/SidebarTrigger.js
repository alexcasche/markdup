import SidebarTrigger from '../SidebarTrigger'
import { shade } from 'polished'

describe('SidebarTrigger Element', () => {
  it('renders correctly', () => {
    const tree = render(<SidebarTrigger />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
