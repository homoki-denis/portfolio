'use client'
import { Canvas } from '@react-three/fiber';
import React, {Suspense} from 'react';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import { Loader } from '@/components/layout';
import { StaticImageData } from 'next/image';

type BallProps = {
  imgUrl: string
}

const Ball: React.FC<BallProps> = ({imgUrl}: BallProps) => {
  
  const [decal] = useTexture([imgUrl])

  return <Float speed={6} rotationIntensity={0.25} floatIntensity={0.25}>
    <ambientLight intensity={0.5}/>
    <directionalLight position={[0,0,0.05]}/>
    <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial color="#FFF8EB" polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal position={[0,0,1]}  map={decal} rotation={[2 * Math.PI, 0, 6.25]}/>
    </mesh>
  </Float>;
};

type BallCanvasProps = {
  icon: StaticImageData
}

const BallCanvas = ({icon}: BallCanvasProps) => {
  return (
    <Canvas gl={{preserveDrawingBuffer: true}}>
    <Suspense fallback={<Loader/>}>
      <OrbitControls
        enableZoom={false}
      />
      <Ball imgUrl={icon.src} />
    </Suspense>
    <Preload all/>
  </Canvas>
  )
}

export default BallCanvas; 