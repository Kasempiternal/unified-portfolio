"use client";

import { useEffect, useRef, Suspense, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProductCube() {
  const meshRef = useRef<any>(null);
  const groupRef = useRef<any>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    const timer = setTimeout(() => {
      const trigger = document.getElementById("product-viewer");
      if (!trigger || !groupRef.current) return;

      const scrollTrigger = ScrollTrigger.create({
        trigger: "#product-viewer",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (groupRef.current) {
            groupRef.current.rotation.y = self.progress * Math.PI * 2;
            groupRef.current.rotation.x = self.progress * Math.PI * 0.5;
          }
        },
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#cd7f32"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>

      <lineSegments>
        <edgesGeometry>
          <boxGeometry args={[2, 2, 2]} />
        </edgesGeometry>
        <lineBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </lineSegments>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#cd7f32" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
      />

      <ProductCube />

      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
}

export default function ProductViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    requestAnimationFrame(() => {
      const trigger = document.getElementById("product-viewer");
      if (!trigger || !containerRef.current) return;

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: "#product-viewer",
          start: "top top",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        if (progressRef.current) {
          gsap.to(progressRef.current, {
            scrollTrigger: {
              trigger: "#product-viewer",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            width: "100%",
            ease: "none",
          });
        }

        ScrollTrigger.refresh();
      }, containerRef);
    });

    return () => {
      const ctx = gsap.context(() => {}, containerRef);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div className="absolute inset-0">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-charcoal-950 mb-4">
            Precision Engineering
          </h2>
          <p className="text-lg md:text-xl text-charcoal-700">
            Scroll to explore every angle of masterful craftsmanship
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-64 h-1 bg-cream-300 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-bronze-500"
            style={{
              width: "0%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
