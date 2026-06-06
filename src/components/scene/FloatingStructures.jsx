import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const STRUCTURES = [
  { type: 'ico', size: 0.55, detail: 0, pos: [3.2, 2.0, -2.5], color: '#00d4ff', speed: 0.35 },
  { type: 'oct', size: 0.42, detail: 0, pos: [-3.1, 1.2, -1.8], color: '#8b5cf6', speed: 0.28 },
  { type: 'tet', size: 0.5, detail: 0, pos: [2.0, -2.2, -3.8], color: '#00ffcc', speed: 0.48 },
  { type: 'ico', size: 0.32, detail: 1, pos: [-2.0, -1.0, -2.8], color: '#f59e0b', speed: 0.6 },
  { type: 'oct', size: 0.65, detail: 0, pos: [4.2, 0.2, -5.0], color: '#00d4ff', speed: 0.2 },
  { type: 'ico', size: 0.22, detail: 0, pos: [-4.0, 2.2, -4.2], color: '#8b5cf6', speed: 0.7 },
  { type: 'tet', size: 0.38, detail: 0, pos: [-1.5, 3.0, -3.5], color: '#00ffcc', speed: 0.4 },
]

function Structure({ type, size, detail, pos, color, speed }) {
  const solidRef = useRef()
  const wireRef = useRef()

  const geo = useMemo(() => {
    if (type === 'ico') return new THREE.IcosahedronGeometry(size, detail)
    if (type === 'oct') return new THREE.OctahedronGeometry(size, detail)
    return new THREE.TetrahedronGeometry(size, detail)
  }, [type, size, detail])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (solidRef.current) {
      solidRef.current.rotation.x = t * speed * 0.45
      solidRef.current.rotation.y = t * speed * 0.65
      solidRef.current.position.y = pos[1] + Math.sin(t * speed * 0.8) * 0.28
    }
    if (wireRef.current) {
      wireRef.current.rotation.copy(solidRef.current.rotation)
      wireRef.current.position.copy(solidRef.current.position)
    }
  })

  const c = new THREE.Color(color)

  return (
    <>
      <mesh ref={solidRef} position={pos} geometry={geo}>
        <meshPhongMaterial
          color={c}
          emissive={c}
          emissiveIntensity={0.25}
          transparent
          opacity={0.12}
        />
      </mesh>
      <mesh ref={wireRef} position={pos} geometry={geo}>
        <meshBasicMaterial color={c} wireframe transparent opacity={0.5} />
      </mesh>
    </>
  )
}

export default function FloatingStructures() {
  return (
    <group>
      {STRUCTURES.map((s, i) => (
        <Structure key={i} {...s} />
      ))}
    </group>
  )
}
