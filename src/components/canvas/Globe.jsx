import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Globe = ({ isMobile }) => {

  const globe = useGLTF("./earth/scene.gltf");

  return (
    <mesh position={[0, 3, 0]}>
      <hemisphereLight position={[0, 2, 0]}  intensity={1} groundColor='black' />
      {/* <spotLight position={[0, -2, 0]}  penumbra={1} intensity={1} castShadow shadow-mapSize={1024} /> */}
      <pointLight intensity={1} />
      <primitive object={globe.scene} scale={isMobile ? 0.35 : 0.375} />

      {/* <pointLight intensity={.4} position={[0, -2, 0]}   /> */}
      <primitive
        object={globe.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const GlobeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Globe isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default GlobeCanvas;