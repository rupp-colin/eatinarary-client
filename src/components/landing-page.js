import React from 'react';
import LandingNav from './landing-nav.js';

export default function LandingPage(props) {
  return(
    <div>
      <h2>Welcome to (e)AT-inerary!</h2>
      <p>Sign up to save your favorite recipes in an easy to use online recipe book or hit the 'Explore!' button to see whats inside!</p>
      <LandingNav />
    </div>
  )
}
