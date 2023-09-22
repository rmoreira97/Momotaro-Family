import React from 'react';
import { Link } from 'react-router-dom';

function GorillaSelection() {
  // Placeholder gorillas for now
  const gorillas = [
    { ID: '0079', Name: 'Genki' },
    { ID: '0091', Name: 'Momotaro' },
    { ID: '0096', Name: 'Gentaro' },
    { ID: '0103', Name: 'Kintaro' },
  ];

  return (
    <div>
      {gorillas.map((gorilla) => (
        <Link key={gorilla.ID} to={`/momofamily/${gorilla.ID}`}>
          <div>{gorilla.Name}</div>
        </Link>
      ))}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default GorillaSelection;
