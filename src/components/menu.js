import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu(props) {
  return (
    <nav>
      <p><Link to={'/myrecipes'}>My RecipeBook</Link></p>
      <p><Link to={'/search'}>Search</Link></p>
      <p><Link to={'/'}>login/sign-up</Link></p>
      <button>sign out</button>
    </nav>
  )
}
