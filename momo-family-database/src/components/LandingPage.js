import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css/LandingPage.css'; // Your custom styles
import landingPageImage from '../Assets/images/landingpage.jpg'; // Import the landing page image

function LandingPage() {
  return (
    <div className="landing-container text-center py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">The Momotaro Family</h1>
            <img
              src={landingPageImage}
              alt="Gorilla Family"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <p className="lead">
              Explore everything there is to know about the amazing gorilla family and learn about these magnificent beings.
            </p>
            <Link to="/gorillas" className="btn btn-primary btn-lg mt-3">
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
