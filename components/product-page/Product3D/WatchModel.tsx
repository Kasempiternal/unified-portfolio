"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  caseMaterial,
  bezelMaterial,
  crystalMaterial,
  dialMaterial,
  handsMaterial,
  hourMarkerMaterial,
  strapMaterial,
  secondHandMaterial,
  subDialMaterial,
} from "./WatchMaterials";

interface WatchModelProps {
  caseColor?: string;
  strapColor?: string;
}

function HourMarkers() {
  const markers = useMemo(() => {
    const items: { angle: number; isCardinal: boolean }[] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
      items.push({ angle, isCardinal: i % 3 === 0 });
    }
    return items;
  }, []);

  const radius = 0.85;

  return (
    <group position={[0, 0.21, 0]}>
      {markers.map(({ angle, isCardinal }, i) => {
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const length = isCardinal ? 0.18 : 0.1;
        const width = isCardinal ? 0.04 : 0.025;

        return (
          <mesh
            key={i}
            position={[x, 0, z]}
            rotation={[0, -angle, 0]}
          >
            <boxGeometry args={[width, 0.015, length]} />
            <meshStandardMaterial {...hourMarkerMaterial} />
          </mesh>
        );
      })}
    </group>
  );
}

function MinuteMarkers() {
  const markers = useMemo(() => {
    const items: number[] = [];
    for (let i = 0; i < 60; i++) {
      if (i % 5 === 0) continue; // skip hour positions
      items.push((i / 60) * Math.PI * 2 - Math.PI / 2);
    }
    return items;
  }, []);

  const radius = 0.9;

  return (
    <group position={[0, 0.21, 0]}>
      {markers.map((angle, i) => {
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <boxGeometry args={[0.012, 0.01, 0.05]} />
            <meshStandardMaterial {...handsMaterial} />
          </mesh>
        );
      })}
    </group>
  );
}

function WatchHands() {
  const secondRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (secondRef.current) {
      // Smooth sweeping second hand
      secondRef.current.rotation.y =
        -(state.clock.elapsedTime * 0.5) * Math.PI * 2;
    }
  });

  return (
    <group position={[0, 0.22, 0]}>
      {/* Hour hand */}
      <mesh position={[0, 0, -0.2]} rotation={[0, Math.PI * 0.25, 0]}>
        <group position={[0, 0, -0.2]}>
          <mesh>
            <boxGeometry args={[0.045, 0.02, 0.4]} />
            <meshStandardMaterial {...handsMaterial} />
          </mesh>
        </group>
      </mesh>

      {/* Minute hand */}
      <mesh position={[0, 0.005, 0]} rotation={[0, -Math.PI * 0.15, 0]}>
        <group position={[0, 0, -0.3]}>
          <mesh>
            <boxGeometry args={[0.035, 0.015, 0.6]} />
            <meshStandardMaterial {...handsMaterial} />
          </mesh>
        </group>
      </mesh>

      {/* Second hand */}
      <mesh ref={secondRef} position={[0, 0.01, 0]}>
        <group position={[0, 0, -0.32]}>
          <mesh>
            <boxGeometry args={[0.012, 0.008, 0.7]} />
            <meshStandardMaterial {...secondHandMaterial} />
          </mesh>
        </group>
        {/* Counterweight */}
        <group position={[0, 0, 0.1]}>
          <mesh>
            <boxGeometry args={[0.025, 0.008, 0.15]} />
            <meshStandardMaterial {...secondHandMaterial} />
          </mesh>
        </group>
      </mesh>

      {/* Center pin */}
      <mesh position={[0, 0.015, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.04, 16]} />
        <meshStandardMaterial {...hourMarkerMaterial} />
      </mesh>
    </group>
  );
}

function SubDials() {
  const positions = [
    { x: 0, z: -0.45, label: "seconds" },
    { x: -0.45, z: 0, label: "24hr" },
    { x: 0, z: 0.45, label: "date" },
  ];

  return (
    <group position={[0, 0.205, 0]}>
      {positions.map(({ x, z, label }) => (
        <group key={label} position={[x, 0, z]}>
          {/* Sub-dial circle recessed into dial */}
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.1, 0.14, 32]} />
            <meshStandardMaterial {...subDialMaterial} />
          </mesh>
          {/* Sub-dial inner face */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.005, 0]}>
            <circleGeometry args={[0.1, 32]} />
            <meshStandardMaterial
              color="#0f0f22"
              roughness={0.95}
              metalness={0.05}
            />
          </mesh>
          {/* Small indicator marks */}
          {[0, 1, 2, 3].map((j) => {
            const a = (j / 4) * Math.PI * 2;
            return (
              <mesh
                key={j}
                position={[Math.cos(a) * 0.11, 0, Math.sin(a) * 0.11]}
              >
                <boxGeometry args={[0.008, 0.008, 0.008]} />
                <meshStandardMaterial {...hourMarkerMaterial} />
              </mesh>
            );
          })}
        </group>
      ))}
    </group>
  );
}

function WatchCase({ caseColor }: { caseColor?: string }) {
  const caseProps = caseColor
    ? { ...caseMaterial, color: caseColor }
    : caseMaterial;

  return (
    <group>
      {/* Main case body */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[1.2, 1.18, 0.4, 64]} />
        <meshStandardMaterial {...caseProps} />
      </mesh>

      {/* Case back */}
      <mesh position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.18, 64]} />
        <meshStandardMaterial {...caseProps} />
      </mesh>

      {/* Bezel ring */}
      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.04, 16, 64]} />
        <meshStandardMaterial {...bezelMaterial} />
      </mesh>

      {/* Inner bezel step */}
      <mesh position={[0, 0.19, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.05, 0.02, 12, 64]} />
        <meshStandardMaterial {...bezelMaterial} />
      </mesh>

      {/* Crown (winding knob) */}
      <group position={[1.35, 0.05, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.08, 0.08, 0.2, 16]} />
          <meshStandardMaterial {...bezelMaterial} />
        </mesh>
        {/* Crown ridges */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const a = (i / 8) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[0.09 * Math.cos(a), 0, 0.09 * Math.sin(a)]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <boxGeometry args={[0.01, 0.22, 0.01]} />
              <meshStandardMaterial {...bezelMaterial} />
            </mesh>
          );
        })}
      </group>

      {/* Crown guards - small protruding bumps on each side of crown */}
      <mesh position={[1.25, 0.05, 0.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.03, 0.12, 8]} />
        <meshStandardMaterial {...caseProps} />
      </mesh>
      <mesh position={[1.25, 0.05, -0.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.03, 0.12, 8]} />
        <meshStandardMaterial {...caseProps} />
      </mesh>

      {/* Lugs - connection points for the strap */}
      {[
        { z: 1.1, side: 1 },
        { z: -1.1, side: -1 },
      ].map(({ z, side }) => (
        <group key={side}>
          {/* Left lug */}
          <mesh position={[-0.4, 0, z * 1]} castShadow>
            <boxGeometry args={[0.15, 0.3, 0.2]} />
            <meshStandardMaterial {...caseProps} />
          </mesh>
          {/* Right lug */}
          <mesh position={[0.4, 0, z * 1]} castShadow>
            <boxGeometry args={[0.15, 0.3, 0.2]} />
            <meshStandardMaterial {...caseProps} />
          </mesh>
          {/* Spring bar (lug pin) */}
          <mesh
            position={[0, 0, z * 1]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.02, 0.02, 0.95, 8]} />
            <meshStandardMaterial color="#a0a0a0" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function WatchDial() {
  return (
    <group>
      {/* Dial face */}
      <mesh position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.05, 64]} />
        <meshStandardMaterial {...dialMaterial} />
      </mesh>

      {/* Minute track ring */}
      <mesh position={[0, 0.205, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.93, 0.98, 64]} />
        <meshStandardMaterial
          color="#121225"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>

      <HourMarkers />
      <MinuteMarkers />
      <SubDials />
      <WatchHands />
    </group>
  );
}

function WatchCrystal() {
  return (
    <group>
      {/* Domed crystal - slightly raised above dial */}
      <mesh position={[0, 0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.05, 1.05, 0.08, 64]} />
        <meshPhysicalMaterial
          transmission={crystalMaterial.transmission}
          thickness={crystalMaterial.thickness}
          roughness={crystalMaterial.roughness}
          ior={crystalMaterial.ior}
          color={crystalMaterial.color}
          transparent
          envMapIntensity={crystalMaterial.envMapIntensity}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Crystal edge bevel */}
      <mesh position={[0, 0.24, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.05, 0.015, 8, 64]} />
        <meshStandardMaterial {...bezelMaterial} />
      </mesh>
    </group>
  );
}

function WatchStrap({ strapColor }: { strapColor?: string }) {
  const color = strapColor || strapMaterial.color;

  return (
    <group>
      {/* Top strap segment (12 o'clock) */}
      <group position={[0, -0.02, -1.6]}>
        <mesh castShadow>
          <boxGeometry args={[0.7, 0.12, 1.2]} />
          <meshStandardMaterial {...strapMaterial} color={color} />
        </mesh>
        {/* Stitching lines */}
        <mesh position={[0.28, 0.065, 0]}>
          <boxGeometry args={[0.015, 0.005, 1.15]} />
          <meshStandardMaterial color="#3a2820" roughness={0.9} />
        </mesh>
        <mesh position={[-0.28, 0.065, 0]}>
          <boxGeometry args={[0.015, 0.005, 1.15]} />
          <meshStandardMaterial color="#3a2820" roughness={0.9} />
        </mesh>
      </group>

      {/* Top strap extension */}
      <group position={[0, -0.02, -2.6]}>
        <mesh castShadow>
          <boxGeometry args={[0.65, 0.1, 0.9]} />
          <meshStandardMaterial {...strapMaterial} color={color} />
        </mesh>
        {/* Rounded tip */}
        <mesh position={[0, 0, -0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.65, 8]} />
          <meshStandardMaterial {...strapMaterial} color={color} />
        </mesh>
      </group>

      {/* Bottom strap segment (6 o'clock) */}
      <group position={[0, -0.02, 1.6]}>
        <mesh castShadow>
          <boxGeometry args={[0.7, 0.12, 1.2]} />
          <meshStandardMaterial {...strapMaterial} color={color} />
        </mesh>
        {/* Stitching lines */}
        <mesh position={[0.28, 0.065, 0]}>
          <boxGeometry args={[0.015, 0.005, 1.15]} />
          <meshStandardMaterial color="#3a2820" roughness={0.9} />
        </mesh>
        <mesh position={[-0.28, 0.065, 0]}>
          <boxGeometry args={[0.015, 0.005, 1.15]} />
          <meshStandardMaterial color="#3a2820" roughness={0.9} />
        </mesh>
      </group>

      {/* Bottom strap extension with buckle area */}
      <group position={[0, -0.02, 2.6]}>
        <mesh castShadow>
          <boxGeometry args={[0.65, 0.1, 0.9]} />
          <meshStandardMaterial {...strapMaterial} color={color} />
        </mesh>
        {/* Buckle */}
        <mesh position={[0, 0.06, 0.1]}>
          <boxGeometry args={[0.72, 0.03, 0.35]} />
          <meshStandardMaterial metalness={0.9} roughness={0.1} color="#c0c0c0" />
        </mesh>
        {/* Buckle pin */}
        <mesh position={[0, 0.08, 0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.015, 0.015, 0.55, 8]} />
          <meshStandardMaterial metalness={0.9} roughness={0.1} color="#b0b0b0" />
        </mesh>
        {/* Strap holes */}
        {[-0.15, 0, 0.15, 0.3].map((offset, i) => (
          <mesh key={i} position={[0, 0.065, offset]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.025, 0.008, 8, 16]} />
            <meshStandardMaterial metalness={0.85} roughness={0.15} color="#a0a0a0" />
          </mesh>
        ))}
      </group>

      {/* Strap keeper/loop */}
      <group position={[0, 0.01, 1.9]}>
        <mesh>
          <boxGeometry args={[0.75, 0.16, 0.08]} />
          <meshStandardMaterial {...strapMaterial} color={color} />
        </mesh>
      </group>
    </group>
  );
}

export default function WatchModel({
  caseColor,
  strapColor,
}: WatchModelProps = {}) {
  return (
    <group rotation={[Math.PI * 0.35, 0, 0]} scale={0.65}>
      <WatchCase caseColor={caseColor} />
      <WatchDial />
      <WatchCrystal />
      <WatchStrap strapColor={strapColor} />
    </group>
  );
}
