import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import MomotaroImage from '../Assets/images/GorillaSelection/Momotaro.png';
import GenkiImage from '../Assets/images/GorillaSelection/Genki.png';
import GentaroImage from '../Assets/images/GorillaSelection/Gentaro.png';
import KintaroImage from '../Assets/images/GorillaSelection/Kintaro.png';
import '../css/GorillaSelection.css';

function GorillaSelection() {
  const gorillas = [
    { ID: '1', Name: 'Momotaro', Image: MomotaroImage },
    { ID: '2', Name: 'Genki', Image: GenkiImage },
    { ID: '3', Name: 'Gentaro', Image: GentaroImage },
    { ID: '4', Name: 'Kintaro', Image: KintaroImage },
  ];

  return (
    <div className="gorilla-container text-center py-5">
      <div className="container">
        <h1 className="display-4 mb-4">Who do you want to get to know?</h1>
        <div className="row d-flex">
          {gorillas.map((gorilla) => (
            <div key={gorilla.ID} className="col-md-3 mb-4">
              <Link to={`/momofamily/${gorilla.ID}`} className="gorilla-item">
                <img src={gorilla.Image} alt={gorilla.Name} className="img-fluid" />
                <div className="gorilla-name">{gorilla.Name}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to="/" className="btn btn-primary btn-lg mt-4">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GorillaSelection;
