import { faCog } from '@fortawesome/free-solid-svg-icons'
import NavbarCogwheel from '../NavbarCogwheel'

describe('NavbarCogwheel Element', () => {
  it('renders correctly', () => {
    const tree = render(<NavbarCogwheel icon={faCog} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds open modifier', () => {
    const tree = render(
      <NavbarCogwheel modifiers={['open']} icon={faCog} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('transform', 'rotate(45deg)')
  })
})
