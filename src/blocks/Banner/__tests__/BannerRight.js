import BannerRight from '../BannerRight'

describe('BannerRight Element', () => {
  it('renders correctly', () => {
    const tree = render(<BannerRight />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
