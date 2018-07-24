import DialogBox from '../DialogBox'

describe('DialogBox Element', () => {
  it('renders correctly', () => {
    const tree = render(<DialogBox />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
