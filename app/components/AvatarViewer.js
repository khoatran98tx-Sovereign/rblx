"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function BlockAvatar() {
  return (
    <group>

      {/* Head */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f2c27b" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.5, 2, 0.8]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-1.3, 0.4, 0]}>
        <boxGeometry args={[0.6, 1.8, 0.6]} />
        <meshStandardMaterial color="#f2c27b" />
      </mesh>

      {/* Right Arm */}
      <mesh position={[1.3, 0.4, 0]}>
        <boxGeometry args={[0.6, 1.8, 0.6]} />
        <meshStandardMaterial color="#f2c27b" />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.45, -1.8, 0]}>
        <boxGeometry args={[0.7, 2, 0.7]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.45, -1.8, 0]}>
        <boxGeometry args={[0.7, 2, 0.7]} />
        <meshStandardMaterial color="#222" />
      </mesh>

    </group>
  );
}

export default function AvatarViewer() {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        background: "#2a2a2a",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Canvas camera={{ position: [0, 1, 7], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <BlockAvatar />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}
