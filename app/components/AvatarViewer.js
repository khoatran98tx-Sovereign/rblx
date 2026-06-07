"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Avatar() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function AvatarViewer() {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        margin: "20px auto"
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 2]} />

        <Avatar />

        <OrbitControls />
      </Canvas>
    </div>
  );
}
