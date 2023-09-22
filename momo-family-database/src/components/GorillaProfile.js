import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css/GorillaProfile.css'; // Your custom styles

function GorillaProfile() {
  const { id } = useParams();
  const [gorilla, setGorilla] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    const gorillaId = parseInt(id, 10);
    if (isNaN(gorillaId)) {
      setError('Invalid Gorilla ID.');
      setLoading(false);
      return;
    }

    fetch('http://localhost:3001/momoFamily')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const foundGorilla = data.find((g) => g.ID === gorillaId);
          if (foundGorilla) {
            setGorilla(foundGorilla);
          } else {
            setError(`Gorilla with ID ${gorillaId} not found.`);
          }
        } else {
          setError('Unexpected data structure from API.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent default behavior like text selection
    setIsDragging(true);
    setInitialPosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging && galleryRef.current) {
      const difference = initialPosition - e.clientX;
      galleryRef.current.scrollLeft += difference;
      setInitialPosition(e.clientX);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

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
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={gorilla.ImageUrl}
            alt={gorilla.Name}
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-8">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>Gender:</strong>
                </td>
                <td>{gorilla.Gender}</td>
              </tr>
              <tr>
                <td>
                  <strong>Birthdate:</strong>
                </td>
                <td>{gorilla.Birthdate}</td>
              </tr>
              <tr>
                <td>
                  <strong>Location:</strong>
                </td>
                <td>{gorilla.Location}</td>
              </tr>
              <tr>
                <td>
                  <strong>Father:</strong>
                </td>
                <td>{gorilla.Father}</td>
              </tr>
              <tr>
                <td>
                  <strong>Mother:</strong>
                </td>
                <td>{gorilla.Mother}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h2>Gallery</h2>
      <div
        className="gallery-container"
        ref={galleryRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {gorilla.Gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="img-fluid"
          />
        ))}
      </div>
      <div className="bio-section">
        <h2>Bio</h2>
        <p>{gorilla.Bio.Feature}</p>
        <ul>
          {gorilla.Bio.LifeHistory.map((history, index) => (
            <li key={index}>{history}</li>
          ))}
        </ul>
      </div>
      <Link to="/gorillas" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
}

export default GorillaProfile;
