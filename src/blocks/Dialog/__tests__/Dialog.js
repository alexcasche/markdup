import Dialog from '../Dialog'

describe('Dialog Block', () => {
  it('renders correctly', () => {
    const tree = render(<Dialog />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
