import React, { Component } from 'react'
import { PropTypes as t } from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from 'blocks'
import { faCog } from '@fortawesome/free-solid-svg-icons'

export default class NavbarComponent extends Component {
  constructor() {
    super()
    this.state = {
      burgerHover: false,
      cogwheelHover: false,
    }
  }
  buttonHover = button => {
    const stateKey = `${button}Hover`
    let newState = {}
    newState[stateKey] = !this.state[stateKey]
    this.setState(prevState => ({
      ...prevState,
      ...newState,
    }))
  }
  buttonModifiers = button => {
    const stateKey = `${button}Hover`
    const propKey = button === 'burger' ? 'showSidebar' : 'showSettings'
    return [
      ...(this.state[stateKey] ? ['hover'] : []),
      ...(this.props[propKey] ? ['open'] : []),
    ]
  }
  render() {
    const { actions } = this.props
    return (
      <Navbar className="Navbar">
        <Navbar.Button
          onClick={() => actions.toggleLayout('showSidebar')}
          onMouseEnter={() => this.buttonHover('burger')}
          onMouseLeave={() => this.buttonHover('burger')}
        >
          <Navbar.Burger modifiers={this.buttonModifiers('burger')} />
        </Navbar.Button>
        <BrowserRouter>
          <Navbar.Brand to="/">
            <span>markd</span>up
          </Navbar.Brand>
        </BrowserRouter>
        <Navbar.Button
          onClick={() => actions.toggleLayout('showSettings')}
          onMouseEnter={() => this.buttonHover('cogwheel')}
          onMouseLeave={() => this.buttonHover('cogwheel')}
        >
          <Navbar.Cogwheel
            icon={faCog}
            modifiers={this.buttonModifiers('cogwheel')}
          />
        </Navbar.Button>
      </Navbar>
    )
  }
}

NavbarComponent.propTypes = {
  showSettings: t.bool.isRequired,
  showSidebar: t.bool.isRequired,
  actions: t.shape({
    toggleLayout: t.func.isRequired,
  }).isRequired,
}
