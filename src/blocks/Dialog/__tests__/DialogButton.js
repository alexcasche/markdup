import DialogButton from '../DialogButton'

describe('DialogButton Element', () => {
  it('renders correctly', () => {
    const tree = render(<DialogButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
