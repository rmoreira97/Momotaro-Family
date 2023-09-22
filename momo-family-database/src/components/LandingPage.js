import React from 'react';
import { Link } from 'react-router-dom';
import '../LandingPage.css'; // Correct relative path
import landingPageImage from '../Assets/images/landingpage.jpg'; // Correct relative path

function LandingPage() {
  return (
    <div className="landing-container">
      <img src={landingPageImage} alt="Gorilla Family" />
      <Link to="/gorillas">
        <button>Enter</button>
      </Link>
    </div>
  );
}

export default LandingPage;
