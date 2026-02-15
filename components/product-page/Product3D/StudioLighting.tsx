"use client";

import { Environment, ContactShadows } from "@react-three/drei";

export function StudioLighting() {
  return (
    <>
      {/* Key light - upper right, warm tone */}
      <spotLight
        position={[5, 5, 5]}
        intensity={2}
        angle={0.3}
        penumbra={0.5}
        color="#fff5e6"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill light - left side, cool tone */}
      <directionalLight position={[-5, 3, 0]} intensity={0.5} color="#e6f0ff" />

      {/* Rim/back light for edge definition */}
      <pointLight position={[0, 3, -5]} intensity={0.3} color="#ffffff" />

      {/* Subtle bottom fill to soften shadows */}
      <pointLight position={[0, -3, 2]} intensity={0.15} color="#fff5e6" />

      {/* Ambient for base illumination */}
      <ambientLight intensity={0.2} />

      {/* Environment map for realistic PBR reflections */}
      <Environment preset="studio" />

      {/* Ground contact shadows */}
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4}
      />
    </>
  );
}
