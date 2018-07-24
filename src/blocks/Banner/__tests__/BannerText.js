import BannerText from '../BannerText'

describe('BannerText Element', () => {
  it('renders correctly', () => {
    const tree = render(
      <BannerText>
        Lines: <span>10</span>
        <br />
        Characters: <span>250</span>
      </BannerText>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
