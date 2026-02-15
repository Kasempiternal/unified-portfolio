'use client'

import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'

interface WebGLDisplacementProps {
  imageUrl: string
  isHovered: boolean
  color: string
}

export default function WebGLDisplacement({
  imageUrl,
  isHovered,
  color,
}: WebGLDisplacementProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useLoader(TextureLoader, imageUrl)
  const hoverProgress = useRef(0)

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uDisplacement: { value: 0 },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vDisplacement;
        uniform float uDisplacement;
        uniform float uTime;

        void main() {
          vUv = uv;

          vec3 pos = position;
          float displacement = sin(pos.x * 3.0 + uTime) * cos(pos.y * 3.0 + uTime) * uDisplacement * 0.3;
          pos.z += displacement;
          vDisplacement = displacement;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uDisplacement;
        uniform vec3 uColor;
        varying vec2 vUv;
        varying float vDisplacement;

        void main() {
          vec2 uv = vUv;

          // Displacement effect on UV
          uv.x += sin(vUv.y * 10.0 + vDisplacement * 5.0) * uDisplacement * 0.05;
          uv.y += cos(vUv.x * 10.0 + vDisplacement * 5.0) * uDisplacement * 0.05;

          vec4 texColor = texture2D(uTexture, uv);

          // Mix with color on displacement
          vec3 finalColor = mix(texColor.rgb, uColor, uDisplacement * 0.3);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    })
  }, [texture, color])

  useFrame((state) => {
    if (!meshRef.current) return

    const target = isHovered ? 1 : 0
    hoverProgress.current += (target - hoverProgress.current) * 0.05

    shaderMaterial.uniforms.uDisplacement.value = hoverProgress.current
    shaderMaterial.uniforms.uTime.value = state.clock.elapsedTime

    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * hoverProgress.current * 0.1
    meshRef.current.rotation.y =
      Math.cos(state.clock.elapsedTime * 0.3) * hoverProgress.current * 0.1
  })

  useEffect(() => {
    shaderMaterial.uniforms.uColor.value = new THREE.Color(color)
  }, [color, shaderMaterial])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <mesh ref={meshRef} material={shaderMaterial}>
        <planeGeometry args={[6, 4.5, 32, 32]} />
      </mesh>
    </>
  )
}
