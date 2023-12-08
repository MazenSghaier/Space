'use client';
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

import spaceBoy from '../models/space_boi/public/space_boi.glb'
const SpaceBoya = () => {
  const space = useGLTF( spaceBoy);

  return (
    <primitive object={space.scene} scale={[.5, .5, .5]} position-y={0} rotation-y={0} />
  );
};

const SpaceCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.5,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SpaceBoya />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpaceCanvas;
