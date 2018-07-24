import Button, { ButtonLink } from '../Button'

describe('Button Element', () => {
  it('renders correctly', () => {
    const tree = render(<Button>Submit</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('ButtonLink Element', () => {
  it('renders correctly', () => {
    const tree = render(<ButtonLink href="/">Submit</ButtonLink>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
