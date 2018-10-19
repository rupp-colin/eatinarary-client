import React from 'react';
import Menu from './menu.js';

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
      <div>
        <button type="button">CART</button>
        <h1>Title</h1>
        <button
          type="button"
          onClick={() => this.toggleMenu()}
        >MENU</button>
      {!this.state.showMenu && <Menu />}
    </div>
    )
  }
}
