import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { PerspectiveCamera } from "three";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const camera = useRef();


  return (
    <Float speed={.5} rotationIntensity={.5} floatIntensity={2}>
      {/* <perspectiveCamera
        ref={camera}
        position={[0, -5, 0]} // Adjust the initial position of the camera
      /> */}
      <ambientLight intensity={5} />
      <directionalLight position={[0, 0, 0.05]}  intensity={5}/>
      <spotLight position={[0, -1, -0.05]}  intensity={5}/>
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#ffd700'
          metalness={1}  
          roughness={.5}
          shadowIntensity={0}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;