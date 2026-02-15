"use client";

import * as THREE from "three";

// PBR material configurations for luxury watch components

export const caseMaterial = {
  metalness: 0.9,
  roughness: 0.15,
  color: "#c0c0c0",
  envMapIntensity: 1.5,
} satisfies Partial<THREE.MeshStandardMaterialParameters>;

export const bezelMaterial = {
  metalness: 0.95,
  roughness: 0.05,
  color: "#d0d0d0",
  envMapIntensity: 2,
} satisfies Partial<THREE.MeshStandardMaterialParameters>;

export const crystalMaterial = {
  transmission: 0.9,
  thickness: 0.5,
  roughness: 0,
  ior: 1.5,
  color: "#ffffff",
  transparent: true,
  envMapIntensity: 1,
} as const;

export const dialMaterial = {
  color: "#1a1a2e",
  roughness: 0.8,
  metalness: 0.1,
} satisfies Partial<THREE.MeshStandardMaterialParameters>;

export const handsMaterial = {
  metalness: 0.9,
  roughness: 0.2,
  color: "#e0e0e0",
  envMapIntensity: 1.2,
} satisfies Partial<THREE.MeshStandardMaterialParameters>;

export const hourMarkerMaterial = {
  metalness: 0.8,
  roughness: 0.2,
  color: "#d4af37",
  envMapIntensity: 1.5,
} satisfies Partial<THREE.MeshStandardMaterialParameters>;

export const strapMaterial = {
  roughness: 0.7,
  metalness: 0.0,
  color: "#2a1810",
} satisfies Partial<THREE.MeshStandardMaterialParameters>;

export const secondHandMaterial = {
  metalness: 0.85,
  roughness: 0.15,
  color: "#c41e3a",
  envMapIntensity: 1.2,
} satisfies Partial<THREE.MeshStandardMaterialParameters>;

export const subDialMaterial = {
  color: "#141428",
  roughness: 0.9,
  metalness: 0.05,
} satisfies Partial<THREE.MeshStandardMaterialParameters>;
