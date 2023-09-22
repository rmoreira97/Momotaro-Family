import React, { useState, useEffect } from 'react';
import DetailsContainer from './DetailsContainer';

function GorillaTable() {
  const [gorillas, setGorillas] = useState([]);
  const [selectedGorilla, setSelectedGorilla] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/momoFamily")
      .then(response => response.json())
      .then(data => setGorillas(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <table id="gorillaTable">
        {/* ... table headers ... */}
        <tbody>
          {gorillas.map(gorilla => (
            <tr key={gorilla.ID} onClick={() => setSelectedGorilla(gorilla)}>
              <td>{gorilla.Name}</td>
              <td>{gorilla.Gender}</td>
              <td>{gorilla.Birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedGorilla && <DetailsContainer gorilla={selectedGorilla} />}
    </div>
  );
}

export default GorillaTable;
