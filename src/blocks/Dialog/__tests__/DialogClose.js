import DialogClose from '../DialogClose'

describe('DialogClose Element', () => {
  it('renders correctly', () => {
    const tree = render(<DialogClose />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
