import Banner from '../Banner'

describe('Banner Block', () => {
  it('renders correctly', () => {
    const tree = render(<Banner />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
