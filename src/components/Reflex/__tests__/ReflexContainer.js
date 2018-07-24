import { ReflexContainer } from '../ReflexContainer'
import ReflexComponent from '../ReflexComponent'

const baseProps = {
  splitView: false,
}

let wrapper

describe('ReflexContainer', () => {
  beforeAll(() => {
    wrapper = shallow(<ReflexContainer {...baseProps} />)
  })
  afterAll(() => {
    wrapper.unmount()
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('passes props to component', () => {
    expect(wrapper.find(ReflexComponent).props()).toMatchObject(baseProps)
  })
})
