import BannerInput from '../BannerInput'

describe('BannerInput Element', () => {
  it('renders correctly', () => {
    const tree = render(
      <BannerInput id="Banner-Input" placeholder="Untitled" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
