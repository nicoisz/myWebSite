import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import TechNode from './TechNode'

const GALAXY_Z = -15

const TECHS = [
  { name: 'React',      color: '#61dafb', basePos: [0, 0, 0],       speed: 0.6 },
  { name: 'Next.js',    color: '#ffffff', basePos: [2.2, 1.0, 0.5],  speed: 0.5 },
  { name: 'TypeScript', color: '#3178c6', basePos: [-2.1, 0.5, -0.4],speed: 0.7 },
  { name: 'Node.js',    color: '#6cc24a', basePos: [1.4, -1.7, 0.8], speed: 0.45 },
  { name: 'GraphQL',    color: '#e535ab', basePos: [-1.4, 1.8, -0.8],speed: 0.55 },
  { name: 'Flutter',    color: '#54c5f8', basePos: [0.4, 2.1, 0.9],  speed: 0.65 },
  { name: 'Firebase',   color: '#ffca28', basePos: [2.9, -0.4, -0.6],speed: 0.4 },
  { name: 'Tailwind',   color: '#38bdf8', basePos: [-1.6, -1.6, 0.5],speed: 0.72 },
  { name: 'PostgreSQL', color: '#336791', basePos: [-0.4, -2.1, -0.9],speed: 0.5 },
  { name: 'Angular',    color: '#dd0031', basePos: [2.4, 0.8, -1.2], speed: 0.58 },
]

const CONNECTIONS = [
  [0, 1], [0, 2], [0, 4], [0, 7],
  [1, 2], [1, 4], [2, 7],
  [3, 6], [3, 8],
  [5, 0], [9, 1],
]

// Animated energy line material
const lineFrag = `
  precision mediump float;
  uniform float uTime;
  uniform vec3 uColor;
  varying float vProgress;
  void main() {
    float flow = fract(vProgress * 3.0 - uTime * 0.6);
    float alpha = smoothstep(0.0, 0.1, flow) * smoothstep(0.5, 0.2, flow) * 0.55;
    gl_FragColor = vec4(uColor, alpha);
  }
`
const lineVert = `
  attribute float aProgress;
  varying float vProgress;
  void main() {
    vProgress = aProgress;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

function EnergyLine({ from, to, color }) {
  const matRef = useRef()

  const { geo } = useMemo(() => {
    const SEGS = 30
    const positions = new Float32Array((SEGS + 1) * 3)
    const progress = new Float32Array(SEGS + 1)
    const f = new THREE.Vector3(...from)
    const t = new THREE.Vector3(...to)

    for (let i = 0; i <= SEGS; i++) {
      const p = i / SEGS
      const v = new THREE.Vector3().lerpVectors(f, t, p)
      positions[i * 3] = v.x
      positions[i * 3 + 1] = v.y
      positions[i * 3 + 2] = v.z
      progress[i] = p
    }

    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    g.setAttribute('aProgress', new THREE.BufferAttribute(progress, 1))
    return { geo: g }
  }, [from, to])

  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = clock.elapsedTime
  })

  const c = new THREE.Color(color)

  return (
    <line geometry={geo}>
      <shaderMaterial
        ref={matRef}
        vertexShader={lineVert}
        fragmentShader={lineFrag}
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: c },
        }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </line>
  )
}

export default function TechGalaxy() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.elapsedTime
      groupRef.current.rotation.y = Math.sin(t * 0.08) * 0.25
      groupRef.current.rotation.x = Math.sin(t * 0.055) * 0.08
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, GALAXY_Z]}>
      {CONNECTIONS.map(([a, b], i) => (
        <EnergyLine
          key={i}
          from={TECHS[a].basePos}
          to={TECHS[b].basePos}
          color={TECHS[a].color}
        />
      ))}
      {TECHS.map((tech, i) => (
        <TechNode key={i} {...tech} />
      ))}
    </group>
  )
}
