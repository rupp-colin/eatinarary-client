import React from 'react';

export default function SearchFrom(props) {
  return (
    <div>
      <h2>Find recipes!</h2>
      <form>
        <label htmlFor="recipe-search">Search</label>
        <input type="text" placeholder="avacado toast"></input>
      </form>
    </div>
  )
}
