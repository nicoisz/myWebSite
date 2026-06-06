import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

const SHOWCASE_Z = -25

const PROJECTS = [
  {
    title: 'Digital Platform',
    subtitle: 'Full-stack web app\nReal-time data & analytics',
    stack: 'React  ·  Node.js  ·  PostgreSQL',
    color: '#00d4ff',
    pos: [-3.0, 0.3, 0],
    rot: [0, 0.38, 0],
  },
  {
    title: 'Mobile Experience',
    subtitle: 'Cross-platform application\n10k+ active users',
    stack: 'Flutter  ·  Firebase  ·  GraphQL',
    color: '#8b5cf6',
    pos: [0, 0.9, -0.5],
    rot: [0, 0, 0],
  },
  {
    title: 'E-Commerce System',
    subtitle: 'Scalable marketplace\nPayment integration & CMS',
    stack: 'Next.js  ·  Stripe  ·  AWS',
    color: '#00ffcc',
    pos: [3.0, 0.3, 0],
    rot: [0, -0.38, 0],
  },
]

const panelVert = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const panelFrag = `
  precision mediump float;
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    // Scanlines
    float scan = sin(uv.y * 90.0 + uTime * 1.5) * 0.025;

    // Edge glow
    float ex = smoothstep(0.0, 0.06, uv.x) * smoothstep(1.0, 0.94, uv.x);
    float ey = smoothstep(0.0, 0.06, uv.y) * smoothstep(1.0, 0.94, uv.y);
    float edge = ex * ey;

    // Grid
    float gx = step(0.97, abs(sin(uv.x * 10.0 * 3.14159)));
    float gy = step(0.97, abs(sin(uv.y * 6.0 * 3.14159)));
    float grid = max(gx, gy) * 0.08;

    vec3 bg = uColor * 0.04;
    vec3 ec = uColor * (0.35 + scan + grid);
    vec3 col = mix(bg, ec, edge * 0.85);
    col += grid * uColor * 0.06;

    float alpha = 0.12 + edge * 0.55;
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`

function Corner({ x, y, color }) {
  return (
    <mesh position={[x * 0.95, y * 0.62, 0.005]}>
      <ringGeometry args={[0.028, 0.048, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  )
}

function HoloPanel({ title, subtitle, stack, color, pos, rot }) {
  const groupRef = useRef()
  const matRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.position.y = pos[1] + Math.sin(t * 0.5 + pos[0] * 0.5) * 0.14
    }
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = t
    }
  })

  const c = useMemo(() => new THREE.Color(color), [color])

  return (
    <group ref={groupRef} position={pos} rotation={rot}>
      {/* Holographic panel face */}
      <mesh>
        <planeGeometry args={[2.4, 1.5]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={panelVert}
          fragmentShader={panelFrag}
          uniforms={{ uTime: { value: 0 }, uColor: { value: c } }}
          transparent
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Content */}
      <Text position={[0, 0.44, 0.01]} fontSize={0.17} color={color} anchorX="center" anchorY="middle">
        {title}
      </Text>
      <Text
        position={[0, 0.08, 0.01]}
        fontSize={0.09}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.0}
        lineHeight={1.4}
        fillOpacity={0.75}
      >
        {subtitle}
      </Text>
      <Text
        position={[0, -0.42, 0.01]}
        fontSize={0.076}
        color={color}
        anchorX="center"
        anchorY="middle"
        fillOpacity={0.6}
      >
        {stack}
      </Text>

      {/* Corner decorations */}
      <Corner x={-1} y={1} color={color} />
      <Corner x={1} y={1} color={color} />
      <Corner x={-1} y={-1} color={color} />
      <Corner x={1} y={-1} color={color} />

      {/* Depth light */}
      <pointLight color={color} intensity={1.2} distance={4} position={[0, 0, 0.8]} />
    </group>
  )
}

export default function ProjectsShowcase() {
  return (
    <group position={[0, 0, SHOWCASE_Z]}>
      {PROJECTS.map((p, i) => (
        <HoloPanel key={i} {...p} />
      ))}
    </group>
  )
}
