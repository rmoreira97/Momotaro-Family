import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useNavigate } from 'react-router-dom';
import { TextureLoader } from 'three';
import { Text as DreiText, OrbitControls } from '@react-three/drei';
import { useLoader } from 'react-three-fiber';



function AppContent() {
  const [view, setView] = useState('landing'); // 'landing' or 'selection'
  const cameraRef = useRef();

  // Define the camera positions
  const startCameraPosition = [0, 0, 5];
  const endCameraPosition = [0, 0, 10];

  // Define the animation parameters
  const animationSpeed = 0.01;
  const animationDirection = view === 'selection' ? 1 : -1;

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <perspectiveCamera
          makeDefault
          position={startCameraPosition}
          ref={cameraRef}
        />
        {view === 'landing' && <LandingPageContent onExploreClick={() => setView('selection')} />}
        {view === 'selection' && <GorillaSelectionContent setView={() => setView('landing')} />}
        {/* Move the useFrame hook inside the Canvas component */}
        <CameraAnimation
          cameraRef={cameraRef}
          view={view}
          setView={setView}
          startCameraPosition={startCameraPosition}
          endCameraPosition={endCameraPosition}
          animationSpeed={animationSpeed}
          animationDirection={animationDirection}
        />
      </Canvas>
    </div>
  );
}

// Define CameraAnimation component
function CameraAnimation({
  cameraRef,
  view,
  setView,
  startCameraPosition,
  endCameraPosition,
  animationSpeed,
  animationDirection,
}) {
  useFrame(() => {
    const camera = cameraRef.current;

    // Calculate the new position
    const newPosition = camera.position.clone().addScaledVector(
      endCameraPosition,
      animationSpeed * animationDirection
    );

    // Set the new position
    camera.position.copy(newPosition);

    // Check if the animation is complete
    if (
      (animationDirection === 1 && camera.position.z >= endCameraPosition[2]) ||
      (animationDirection === -1 && camera.position.z <= startCameraPosition[2])
    ) {
      setView(view === 'landing' ? 'selection' : 'landing');
    }
  });

  return null;
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
        position={[0, -0.02, 4.6]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[-1, 0, 0]}
        color="white"
        onClick={onExploreClick}
      >
        Explore Now
      </DreiText>
      <OrbitControls />
    </>
  );
}

function GorillaSelectionContent({ setView }) {
  const navigate = useNavigate();
  const gorillaImages = [
    '/Assets/images/GorillaSelection/Momotaro.png',
    '/Assets/images/GorillaSelection/Genki.png',
    '/Assets/images/GorillaSelection/Gentaro.png',
    '/Assets/images/GorillaSelection/Kintaro.png',
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[2, 2, 2]} />
      {gorillaImages.map((image, index) => (
        <GorillaImage key={index} image={image} position={[-2.3 + index * 1.5, 0, 2.1]} rotation={[.1, 0, 0]} />
      ))}
      <DreiText
        position={[0, -2, 0]}
        scale={[0.3, 0.3, 0.1]}
        color="white"
        onClick={() => setView('landing')}
      >
        Back
      </DreiText>
      <OrbitControls />
    </>
  );
}

function GorillaImage({ image, position, rotation }) {
    // Use useLoader from react-three-fiber to load textures
    const texture = useLoader(TextureLoader, image);
  
    // Enable alpha transparency for the material
    texture.encoding = 16; // This is equivalent to THREE.sRGBEncoding
    texture.anisotropy = 16; // Adjust the anisotropy value as needed
  
    // Create a material with alpha blending enabled
    const material = {
      map: texture,
      transparent: true, // Enable transparency
      alphaTest: 0.5, // Adjust the alphaTest value as needed
    };
  
    return (
      <mesh position={position} rotation={rotation}>
        <planeGeometry args={[1.1, 1.2]} />
        <meshBasicMaterial {...material} />
      </mesh>
    );
  }
  

export default AppContent;
