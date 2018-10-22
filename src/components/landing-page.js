import React from 'react';
import LandingNav from './landing-nav.js';
import './landing-page.css';

export default function LandingPage(props) {
  return(
    <div className="row">
      <div className="nav-spacer col-12"></div>
      <div className="welcome-message col-6">
        <h2>Welcome to EAT-inerary!</h2>
        <p>Sign up to save your favorite recipes in an easy to use online recipe book or hit the 'Explore!' button to see whats inside!</p>
      </div>
      <LandingNav />
    </div>
  )
}
