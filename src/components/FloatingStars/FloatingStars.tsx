"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";

const Stars = () => {
  const ref = useRef<THREE.Points>(null);

  // Use useMemo to ensure positions array is created only once
  const positions = useMemo(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, []); // Empty dependency array ensures it runs only once

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.rotation.x += 0.002;
    }
  });

  return (
    <Points ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          args={[positions, 3]}
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <PointMaterial size={0.005} color="white" transparent />
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
