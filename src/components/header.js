import React from 'react';
import Menu from './menu.js';
import './header.css'

export default class Header extends React.Component {

  state = {
    showMenu: true
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <div className="header-container">
        <div id="cart-button">
        </div>
        <div id="nav-title">
          <h1 id="nav-title">EAT-inarary</h1>
        </div>
        <div id="menu-div">
          <button
            className="header-button menu-button"
            type="button"
            onClick={() => this.toggleMenu()}
          >MENU</button>
        </div>
      {!this.state.showMenu && <Menu />}
    </div>
    )
  }
}
