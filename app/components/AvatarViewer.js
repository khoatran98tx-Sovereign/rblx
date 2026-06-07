"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

function Avatar() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function AvatarViewer() {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight position={[2, 2, 2]} />
        <Avatar />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
