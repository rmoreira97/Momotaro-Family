import React from 'react';
import { Link } from 'react-router-dom';
import '/home/rmoreira97/gorilla/momo-family-database/src/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <img src="./Assets/images/landingpage.jpg" alt="Gorilla Family" />
      <Link to="/gorillas">
        <button>Enter</button>
      </Link>
    </div>
  );
}

export default LandingPage;
