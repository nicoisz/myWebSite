import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Billboard } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

export default function TechNode({ name, color, basePos, speed }) {
  const groupRef = useRef()
  const meshRef = useRef()
  const wireRef = useRef()
  const lightRef = useRef()
  const [hovered, setHovered] = useState(false)

  const c = new THREE.Color(color)

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.position.y = basePos[1] + Math.sin(t * speed + basePos[0]) * 0.12
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.006
      meshRef.current.rotation.y += 0.009
    }
    if (wireRef.current) {
      wireRef.current.rotation.copy(meshRef.current.rotation)
    }
    if (lightRef.current) {
      lightRef.current.intensity = THREE.MathUtils.lerp(
        lightRef.current.intensity,
        hovered ? 2.5 : 0,
        0.12
      )
    }
  })

  const onEnter = () => {
    setHovered(true)
    if (meshRef.current) {
      gsap.to(meshRef.current.scale, { x: 1.45, y: 1.45, z: 1.45, duration: 0.3, ease: 'back.out(1.7)' })
    }
    document.body.style.cursor = 'pointer'
  }

  const onLeave = () => {
    setHovered(false)
    if (meshRef.current) {
      gsap.to(meshRef.current.scale, { x: 1, y: 1, z: 1, duration: 0.3, ease: 'power2.out' })
    }
    document.body.style.cursor = 'auto'
  }

  return (
    <group ref={groupRef} position={basePos}>
      <mesh
        ref={meshRef}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
      >
        <icosahedronGeometry args={[0.22, 1]} />
        <meshPhongMaterial
          color={c}
          emissive={c}
          emissiveIntensity={hovered ? 1.8 : 0.55}
          transparent
          opacity={0.9}
          shininess={80}
        />
      </mesh>

      <mesh ref={wireRef}>
        <icosahedronGeometry args={[0.28, 1]} />
        <meshBasicMaterial color={c} wireframe transparent opacity={hovered ? 0.6 : 0.25} />
      </mesh>

      <pointLight ref={lightRef} color={c} intensity={0} distance={4} decay={2} />

      <Billboard>
        <Text
          position={[0, -0.44, 0]}
          fontSize={0.1}
          color={color}
          anchorX="center"
          anchorY="top"
          outlineWidth={0.005}
          outlineColor="#000"
        >
          {name}
        </Text>
      </Billboard>
    </group>
  )
}
