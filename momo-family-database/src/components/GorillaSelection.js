import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="gorilla-container">
      <div className="gorilla-gallery">
        {gorillas.map((gorilla) => (
          <Link key={gorilla.ID} to={`/momofamily/${gorilla.ID}`} className="gorilla-item">
            <img src={gorilla.Image} alt={gorilla.Name} />
            <div className="gorilla-name">{gorilla.Name}</div>
          </Link>
        ))}
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default GorillaSelection;
