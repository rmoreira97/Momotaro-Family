import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import familyImage from '/home/rmoreira97/gorilla/momo-family-database/src/Assets/images/family.png';
import '/home/rmoreira97/gorilla/momo-family-database/src/css/LandingPage.css';

function Scene() {
  // Load the family texture
  const familyTexture = useLoader(THREE.TextureLoader, familyImage);


  return (
    <>
      <ambientLight intensity={0.2} />
      <sprite position={[-1, 0, 0]} scale={[1, 1, 1]}>
        <spriteMaterial attach="material" map={familyTexture} />
      </sprite>
      <Text position={[-1, 0.5, 0]} fontSize={0.2} color="white">
        The Momotaro Family
      </Text>
      <Text position={[-0.5, -0.5, 0]} fontSize={0.1} color="white">
        Explore Now
      </Text>
      {/* Add other 3D objects here */}
    </>
  );
}

function LandingPage() {
  return (
    <div className="landing-container">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  );
}

export default LandingPage;
