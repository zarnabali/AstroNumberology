import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf'); // Ensure the path is correct

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position={[0, 0, 0]} // Use an array for position
      rotation={[0, 0, 0]} // Use an array for rotation
      key="earth" // Optional: Add a key
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} // Fixed typo: Math.PI instead of Math.PT
        />
        <Earth />
        <Preload all /> {/* Preload assets */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;