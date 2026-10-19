import React, { useEffect, useRef, useState } from 'react'
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
const TechIcon = ({model}) => {
    const scene = useGLTF(model.modelPath);
    const wrapRef = useRef(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
      const node = wrapRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => setActive(entry.isIntersecting),
        { rootMargin: "180px" }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }, []);

  return (
    <div ref={wrapRef} className="h-full w-full">
    <Canvas dpr={[1, 1.5]} frameloop={active ? "always" : "never"}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Environment preset="city" />

        <OrbitControls enableZoom={false} />

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene} />
            </group>
        </Float>
    </Canvas>
    </div>
  )
}

export default TechIcon
