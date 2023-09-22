import React from 'react';

function GallerySection({ gallery }) {
  return (
    <div className="gallery-section">
      {gallery.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt="Gallery Image" className="gallery-image" />
      ))}
    </div>
  );
}

export default GallerySection;
