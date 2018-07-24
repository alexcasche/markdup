import { BrowserRouter } from 'react-router-dom'
import Link, { RouterLink } from '../Link'

describe('Link Element', () => {
  it('renders correctly', () => {
    const tree = render(<Link to="/">Link</Link>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('RouterLink Element', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Link to="/">Link</Link>
      </BrowserRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
