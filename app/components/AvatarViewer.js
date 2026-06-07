"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function RobloxAvatar() {
  return (
    <group>
      {/* Head */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#f1c27d" />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[1, 1.4, 0.6]} />
        <meshStandardMaterial color="royalblue" />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.8, 0.8, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#f1c27d" />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.8, 0.8, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#f1c27d" />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.3, -0.6, 0]}>
        <boxGeometry args={[0.4, 1.4, 0.4]} />
        <meshStandardMaterial color="navy" />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.3, -0.6, 0]}>
        <boxGeometry args={[0.4, 1.4, 0.4]} />
        <meshStandardMaterial color="navy" />
      </mesh>
    </group>
  );
}

export default function AvatarViewer() {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        background: "#222",
        borderRadius: "12px"
      }}
    >
      <Canvas camera={{ position: [3, 2, 5] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} />

        <RobloxAvatar />

        <OrbitControls />
      </Canvas>
    </div>
  );
}
