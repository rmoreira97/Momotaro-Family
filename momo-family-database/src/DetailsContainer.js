import React from 'react';
import GallerySection from './GallerySection';

function DetailsContainer({ gorilla }) {
  return (
    <div className="details-container" id="detailsContainer">
      <h2 id="gorillaName">{gorilla.Name}</h2>
      {/* ... other details ... */}
      <GallerySection gallery={gorilla.Gallery} />
    </div>
  );
}

export default DetailsContainer;
