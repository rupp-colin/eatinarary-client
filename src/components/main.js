import React from 'react';
import SearchFrom from './search-form.js';
import Results from './results.js';

export default function(props) {
  return (
    <main className="col-12">
      <div className="nav-spacer"></div>
      <SearchFrom />
      <Results />
    </main>
  )
}
