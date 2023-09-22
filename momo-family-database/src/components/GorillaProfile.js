import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function GorillaProfile() {
  const { id } = useParams();
  const [gorilla, setGorilla] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const gorillaId = parseInt(id, 10);

    fetch('http://localhost:3001/momoFamily')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data from API:', data);

        const foundGorilla = data.momoFamily.find((g) => g.ID === gorillaId);
        console.log('Found Gorilla:', foundGorilla);

        if (foundGorilla) {
          setGorilla(foundGorilla);
        } else {
          setError(`Gorilla with ID ${gorillaId} not found.`);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!gorilla) {
    return <div>Gorilla not found.</div>;
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
