import DialogHeader from '../DialogHeader'

describe('DialogHeader Element', () => {
  it('renders correctly', () => {
    const tree = render(<DialogHeader />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
