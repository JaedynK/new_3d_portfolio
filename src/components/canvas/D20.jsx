import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const D20 = ({ isMobile }) => {

  const d20 = useGLTF("./d20/scene.gltf");

  return (
    <mesh position={[0, 0, 0]} >
    <spotLight position={[-5, 0, 10]} intensity={1000} angle={Math.PI / 6} /> 
    <spotLight position={[15, 15, 5]} intensity={1000} angle={Math.PI / 6} />
    <spotLight position={[5, -7, -4]} intensity={1000} angle={Math.PI / 6} />
    <spotLight position={[0, -15, 0]} intensity={1000}  angle={Math.PI / 6}/>
    <spotLight position={[-5, 15, -5]} intensity={1000} />
    <spotLight position={[5, 10, -20]} intensity={1000}/>
    <spotLight position={[-5, -10, -5]} intensity={1000}/>
    <spotLight position={[-1, 20, -1]} intensity={1000}/>
    <spotLight position={[5, -10, 5]} intensity={1000} />
    <spotLight position={[-5, 10, 5]} intensity={1000} />
    <spotLight position={[5, 7, 20]} intensity={1000}/>
    <spotLight position={[10, 10, -10]} intensity={1000}/>
    <spotLight position={[-5, -10, 10]} intensity={1000}/>
      <primitive
        object={d20.scene}
        scale={isMobile ? [7, 7, 7] : [5, 5, 5]}
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
    const updateIsMobile = () => {
        setIsMobile(window.matchMedia("(max-width: 500px)").matches);
    };
    updateIsMobile();
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    mediaQuery.addEventListener("change", updateIsMobile);
    return () => {
        mediaQuery.removeEventListener("change", updateIsMobile);
    };
}, []);

  return (
    <div   style={{
      position: 'absolute',
      top: '55%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: isMobile ? '200px' : '300px',
      height: isMobile ? '200px' : '300px',
    }}>
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [20, 0, 20], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls  enableZoom={false}
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}
        />
        <D20 isMobile={isMobile}  />
      </Suspense>
    </Canvas>
    </div>
  );
};

export default D20Canvas;
