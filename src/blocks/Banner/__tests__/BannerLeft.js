import BannerLeft from '../BannerLeft'

describe('BannerLeft Element', () => {
  it('renders correctly', () => {
    const tree = render(<BannerLeft />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
