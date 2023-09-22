import React from 'react';
import { Link } from 'react-router-dom';

function GorillaSelection() {
  // Placeholder gorillas for now
  const gorillas = [
    { id: 1, name: 'Gorilla 1' },
    { id: 2, name: 'Gorilla 2' },
    { id: 3, name: 'Gorilla 3' },
    { id: 4, name: 'Gorilla 4' },
  ];

  return (
    <div>
      {gorillas.map((gorilla) => (
        <Link key={gorilla.id} to={`/gorilla/${gorilla.id}`}>
          <div>{gorilla.name}</div>
        </Link>
      ))}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default GorillaSelection;
