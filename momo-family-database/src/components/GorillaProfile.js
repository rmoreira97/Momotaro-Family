import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function GorillaProfile() {
  const { id } = useParams();
  const [gorilla, setGorilla] = useState(null);

  useEffect(() => {
    // Fetch the gorilla data using the `id` from the URL
    fetch(`http://localhost:3001/momoFamily`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from API:', data); // Debug: Log the data
        const foundGorilla = data.find((g) => g.ID === id); // Use `data` directly
        console.log('Found Gorilla:', foundGorilla); // Debug: Log the found gorilla
        setGorilla(foundGorilla);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        console.log('Error:', error); // Debug: Log the error
      });
  }, [id]);

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
