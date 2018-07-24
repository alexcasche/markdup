import ReflexBox from '../ReflexBox'

describe('ReflexBox Element', () => {
  it('renders correctly', () => {
    const tree = render(<ReflexBox />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds expanded modifier', () => {
    const tree = render(<ReflexBox modifiers={['expanded']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('z-index', '999')
  })
})
