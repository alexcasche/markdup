import Settings from '../Settings'

describe('Settings Block', () => {
  it('renders correctly', () => {
    const tree = render(<Settings />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
