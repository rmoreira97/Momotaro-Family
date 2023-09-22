import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GorillaProfile({ match }) {
  const [gorilla, setGorilla] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/momoFamily')
      .then((response) => response.json())
      .then((data) => {
        const foundGorilla = data.find((g) => g.ID === match.params.id);
        setGorilla(foundGorilla);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [match.params.id]);

  if (!gorilla) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{gorilla.Name}</h1>
      <p>{gorilla.Bio.Feature}</p>
      <ul>
        {gorilla.Bio.LifeHistory.map((history, index) => (
          <li key={index}>{history}</li>
        ))}
      </ul>
      <Link to="/gorillas">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default GorillaProfile;
