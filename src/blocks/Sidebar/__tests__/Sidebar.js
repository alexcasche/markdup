import Sidebar from '../Sidebar'

describe('Sidebar Block', () => {
  it('renders correctly', () => {
    const tree = render(<Sidebar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
