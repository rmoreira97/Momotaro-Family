import React, { Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { useNavigate } from 'react-router-dom';
import { TextureLoader } from 'three';
import MomotaroImage from '../../public/Assets/images/GorillaSelection/Momotaro.png'; // Updated path
import GenkiImage from '../../public/Assets/images/GorillaSelection/Genki.png'; // Updated path
import GentaroImage from '../../public/Assets/images/GorillaSelection/Gentaro.png'; // Updated path
import KintaroImage from '../../public/Assets/images/GorillaSelection/Kintaro.png'; // Updated path
import CustomBackButton from './CustomBackButton'; // Import the CustomBackButton component

function GorillaSelection() {
  const navigate = useNavigate();
  const gorillaImages = [MomotaroImage, GenkiImage, GentaroImage, KintaroImage];

  // Create a functional component for a 3D back button
  function CustomBackButton({ onClick, position }) {
    return (
      <mesh
        position={position}
        onClick={onClick}
      >
        {/* Implement the visual representation of the back button */}
        <boxGeometry args={[0.5, 0.2, 0.1]} />
        <meshBasicMaterial color="blue" />
        <textMesh position={[0, 0, 0.05]} text="BACK" fontSize={0.05} color="white" />
      </mesh>
    );
  }

  return (
    <div className="gorilla-container text-center py-5">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.8} position={[2, 2, 2]} />
        
        {/* Load and position 3D images */}
        <Suspense fallback={null}>
          {gorillaImages.map((image, index) => (
            <GorillaImage key={index} image={image} position={[-2 + index * 2, 0, 0]} />
          ))}
          
          {/* Render the CustomBackButton component */}
          <CustomBackButton onClick={() => navigate('/')} position={[0, -2, -2]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Create a functional component for a 3D image
function GorillaImage({ image, position }) {
  const texture = useLoader(TextureLoader, image);

  return (
    <mesh position={position}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default GorillaSelection;
