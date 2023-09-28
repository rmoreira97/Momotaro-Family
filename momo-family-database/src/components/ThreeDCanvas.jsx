// ThreeDCanvas.js
import React, { useRef, useEffect } from 'react';
import { WebGLRenderer, Scene, PerspectiveCamera } from 'three';

const ThreeDCanvas = ({ children }) => {
  const canvasRef = useRef();
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer();

  useEffect(() => {
    // Set up your 3D scene here
    camera.position.z = 5;

    // Append the renderer to the DOM
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Add any 3D objects to the scene

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update your 3D scene here

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={canvasRef}>
      {children}
    </div>
  );
}

export default ThreeDCanvas;
