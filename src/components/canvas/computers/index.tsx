"use client";

import React, { Suspense, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { Loader } from "@/components/layout";
import { useIsMobileStore } from "@/store/isMobileStore";

type ComputerModelProps = {
  isMobile: boolean;
};

const ComputerModel: React.FC<ComputerModelProps> = ({
  isMobile,
}: ComputerModelProps) => {
  const computer = useGLTF("./3d/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1.8} groundColor="black" />
      <pointLight intensity={3} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      <spotLight position={[10, 10, 10]} angle={0.15} />
    </mesh>
  );
};

const ComputerCanvas: React.FC = () => {
  const { isMobile, setIsMobile } = useIsMobileStore();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: { matches: boolean }) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [setIsMobile]);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="z-0"
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
