"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function Memories() {
    const ref = useRef<any>(null);

    const positions = useMemo(() => {
    const array = new Float32Array(5000 * 3);

    for (let i = 0; i < 5000; i++) {
      array[i * 3] = (Math.random() - 0.5) * 10;
      array[i * 3 + 1] = (Math.random() - 0.5) * 6;
      array[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    return array;
  }, []);

  useFrame((state) => {
  if (!ref.current) return;

  ref.current.rotation.z =
    Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
});
  return (
   <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
  transparent
  color="#e8c77a"
  size={0.02}
  sizeAttenuation
  depthWrite={false}
  opacity={0.7}
/>
    </Points>
  );
}

export default function MemoryParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4] }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <color attach="background" args={["black"]} />
      <Memories />
    </Canvas>
  );
}