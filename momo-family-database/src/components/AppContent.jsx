import React, { useState, Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { useNavigate } from 'react-router-dom';
import { TextureLoader } from 'three';
import { Text as DreiText, OrbitControls } from '@react-three/drei';
import CustomBackButton from './CustomBackButton'; // Assuming this is in the same directory

function AppContent() {
  const [view, setView] = useState('landing'); // 'landing' or 'selection'

  const handleExploreClick = () => {
    setView('selection');
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {view === 'landing' && <LandingPageContent onExploreClick={handleExploreClick} />}
        {view === 'selection' && <GorillaSelectionContent />}
      </Canvas>
    </div>
  );
}

function LandingPageContent({ onExploreClick }) {
    const familyTexture = useLoader(TextureLoader, '/Assets/images/family.png');
  
    return (
      <>
        <ambientLight intensity={0.2} />
        <DreiText 
          position={[0, 0.6, 3.3]} 
          scale={[0.2, 0.2, 0.2]}
          rotation={[0.8, 0, 0]}
        > 
          The Momotaro Family
        </DreiText>
        <sprite position={[0, 0.33, 3.6]} scale={[1, 1, 1]}>
          <spriteMaterial attach="material" map={familyTexture} />
        </sprite>
        <DreiText
  position={[0, -0.02, 4.6]}  // Adjusted the Y position to bring it closer to the center
  scale={[0.1, 0.1, 0.1]}
  rotation={[-1, 0, 0]}
  color="white"  // Changed the color to red for visibility
  onClick={onExploreClick}
>
  Explore Now
</DreiText>
        <OrbitControls />
      </>
    );
  }

function GorillaSelectionContent() {
  const navigate = useNavigate();
  const gorillaImages = [
    '/Assets/images/GorillaSelection/Momotaro.png',
    '/Assets/images/GorillaSelection/Genki.png',
    '/Assets/images/GorillaSelection/Gentaro.png',
    '/Assets/images/GorillaSelection/Kintaro.png'
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[2, 2, 2]} />
      <Suspense fallback={null}>
        {gorillaImages.map((image, index) => (
          <GorillaImage key={index} image={image} position={[-2 + index * 2, 0, 0]} />
        ))}
        <CustomBackButton onClick={() => navigate('/')} position={[0, -2, -2]} />
      </Suspense>
    </>
  );
}

function GorillaImage({ image, position }) {
  const texture = useLoader(TextureLoader, image);

  return (
    <mesh position={position}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default AppContent;
