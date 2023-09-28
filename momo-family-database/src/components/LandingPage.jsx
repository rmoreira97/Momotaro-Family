import React, { Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useNavigate } from 'react-router-dom';
import '/home/rmoreira97/gorilla/momo-family-database/src/css/LandingPage.css';

function LandingPageContent() {
  const navigate = useNavigate();
  const familyTexture = useLoader(TextureLoader, '/Assets/images/family.png');

  return (
    <>
      <ambientLight intensity={0.2} />
      <Text 
  position={[0, 1, -1]} 
  scale={[0.2, 0.2, 0.2]}
  rotation={[-.3, 0, 0]}  // Adjust the x-axis rotation here
> 
        The Momotaro Family
      </Text>
      <sprite position={[0, 0.5, 0]} scale={[1, 1, 1]}>
        <spriteMaterial attach="material" map={familyTexture} />
      </sprite>
      <Text
        position={[0, 0, 1.6]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[-1, 0, 0]} // Adjust the x-axis rotation here
        onClick={() => navigate('/gorillas')}
      >
        Explore Now
      </Text>
      <OrbitControls />
    </>
  );
}

function LandingPage() {
  return (
    <div className="landing-container text-center py-5" style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Suspense fallback={null}>
          <LandingPageContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default LandingPage;
