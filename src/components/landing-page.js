import React from 'react';
import LandingNav from './landing-nav.js';
import './landing-page.css';

export default function LandingPage(props) {
  return(
    <div className="row">
      <div className="nav-spacer col-12"></div>
      <div className="welcome-message col-6">
        <h2>Welcome to EAT-inerary!</h2>
        <p>Whats EATinarary you may be asking youserlf? <br/><br/> It's a place where
          you can search for recipes, save them in your own custom recipe book, upload
          your own recipes, and always have them available wherever you go!</p>
        <p>Sign up to save your favorite recipes in an easy to use online recipe book or hit the 'Explore!' button to see whats inside!</p>
        <p> demo credentials <br/> username: user1 <br/> password: password123 </p>
      </div>
      <LandingNav />
    </div>
  )
}
