import PreviewButton from '../PreviewButton'

describe('PreviewButton Element', () => {
  it('renders correctly', () => {
    const tree = render(<PreviewButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds mobile modifiers', () => {
    const tree = render(<PreviewButton modifiers={['mobile']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('display', 'none', {
      media: 'only screen and (min-width:600px)',
    })
  })
})
