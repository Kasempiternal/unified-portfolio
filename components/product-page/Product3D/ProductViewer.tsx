"use client";

import { useEffect, useRef, Suspense, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Center,
  Float,
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WatchModel from "./WatchModel";
import { StudioLighting } from "./StudioLighting";

gsap.registerPlugin(ScrollTrigger);

function WatchScene() {
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
          }
        },
      });

      ScrollTrigger.refresh();

      return () => {
        scrollTrigger.kill();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Center>
          <WatchModel />
        </Center>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <StudioLighting />

      <WatchScene />

      <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={45} />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minDistance={3}
        maxDistance={8}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.7}
      />
    </>
  );
}

export default function ProductViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    requestAnimationFrame(() => {
      const trigger = document.getElementById("product-viewer");
      if (!trigger || !containerRef.current) return;

      ctxRef.current = gsap.context(() => {
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
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
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
