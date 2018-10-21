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
        <button type="button">CART</button>
        <h1>EAT-inarary</h1>
        <button
          className="menu-button"
          type="button"
          onClick={() => this.toggleMenu()}
        >MENU</button>
      {!this.state.showMenu && <Menu />}
    </div>
    )
  }
}
