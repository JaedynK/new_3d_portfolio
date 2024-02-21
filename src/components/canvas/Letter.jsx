import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshStandardMaterial } from "three";
import CanvasLoader from "../Loader";

const Letter = () => {
  const letter = useGLTF("./letter/scene.gltf");

  return (
    <mesh position={[0, -4, 0]} >
      <ambientLight intensity={5}/>
      <hemisphereLight position={[0, 0, 0]} intensity={5} />
      <primitive object={letter.scene} scale={.75} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const LetterCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 1, 20], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Letter />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default LetterCanvas;