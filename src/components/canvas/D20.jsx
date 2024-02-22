import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const D20 = ({ isMobile }) => {

  const d20 = useGLTF("./d20/scene.gltf");

  return (
    <mesh position={[0, -2, 0]}>
      {/* center */}
    <spotLight position={[-5, 0, 10]} intensity={1000} angle={Math.PI / 6} /> 
    {/* #18 */}
    <spotLight position={[15, 15, 5]} intensity={1000} angle={Math.PI / 6} />
     {/* #5  */}
    <spotLight position={[5, -7, -4]} intensity={1000} angle={Math.PI / 6} />
    {/* bottom front  */}
    <spotLight position={[0, -15, 0]} intensity={1000}  angle={Math.PI / 6}/>
    {/* top right */}
    <spotLight position={[-5, 15, -5]} intensity={1000} />
    {/* left top side */}
    <spotLight position={[5, 10, -20]} intensity={1000}/>
    {/* bottom front left  */}
    <spotLight position={[-5, -10, -5]} intensity={1000}/>
    {/* top center */}
    <spotLight position={[-1, 20, -1]} intensity={1000}/>
    {/* Botom right */}
    <spotLight position={[5, -10, 5]} intensity={1000} />
    {/* top left */}
    <spotLight position={[-5, 10, 5]} intensity={1000} />
    {/* center left */}
    <spotLight position={[5, 7, 20]} intensity={1000}/>
    {/* center right */}
    <spotLight position={[10, 10, -10]} intensity={1000}/>
    {/* bottom left */}
    <spotLight position={[-5, -10, 10]} intensity={1000}/>

      <primitive
        object={d20.scene}
        scale={isMobile ? 3 : 4}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        receiveShadow={false}
        castShadow={false} 
      />
    </mesh>
  );
};

const D20Canvas = () => {
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
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [20, 1, 20], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls  enableZoom={false}
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}/>
        <D20 isMobile={isMobile}  />
      </Suspense>
    </Canvas>
  );
};

export default D20Canvas;