import Toggle from '../Toggle'

describe('Toggle Element', () => {
  it('renders correctly', () => {
    const tree = render(<Toggle />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
