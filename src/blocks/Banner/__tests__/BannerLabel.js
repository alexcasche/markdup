import BannerLabel from '../BannerLabel'

describe('BannerLabel Element', () => {
  it('renders correctly', () => {
    const tree = render(
      <BannerLabel for="BannerInput">Workspaces</BannerLabel>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
