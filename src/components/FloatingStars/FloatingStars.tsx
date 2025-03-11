"use client"; // Only if using Next.js
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";

const Stars = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 2000;

  // Memoize positions array so it is created only once
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 5; // Spread stars randomly in 3D space
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // Rotate the stars slowly
      ref.current.rotation.x += 0.002; // Add subtle movement on x-axis
    }
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial size={0.01} color="white" transparent />
    </Points>
  );
};

const FloatingStarsBackground = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </motion.div>
  );
};

export default FloatingStarsBackground;
