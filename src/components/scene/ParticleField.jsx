import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 18000

const vert = `
  attribute float aSize;
  attribute float aSpeed;
  attribute vec3 aColor;
  uniform float uTime;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vColor = aColor;
    vec3 pos = position;

    float wave = sin(pos.x * 0.25 + uTime * aSpeed) * 0.18;
    wave += cos(pos.y * 0.18 + uTime * aSpeed * 0.65) * 0.12;
    pos.z += wave;
    pos.x += sin(uTime * aSpeed * 0.08 + pos.z * 0.07) * 0.09;

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    float dist = -mvPos.z;
    gl_PointSize = clamp(aSize * (280.0 / dist), 0.5, 6.0);
    gl_Position = projectionMatrix * mvPos;
    vAlpha = clamp(1.0 - dist / 35.0, 0.0, 1.0);
  }
`

const frag = `
  precision mediump float;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.05, d) * vAlpha;
    gl_FragColor = vec4(vColor, alpha);
  }
`

export default function ParticleField() {
  const matRef = useRef()

  const attrs = useMemo(() => {
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const sizes = new Float32Array(COUNT)
    const speeds = new Float32Array(COUNT)

    for (let i = 0; i < COUNT; i++) {
      // Tunnel of particles along the full camera path
      const x = (Math.random() - 0.5) * 38
      const y = (Math.random() - 0.5) * 38
      const z = Math.random() * 14 - 52  // z: 14 to -38

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      const t = Math.random()
      if (t < 0.38) {
        // cyan
        colors[i * 3] = 0.0
        colors[i * 3 + 1] = 0.75 + Math.random() * 0.25
        colors[i * 3 + 2] = 1.0
      } else if (t < 0.68) {
        // purple
        colors[i * 3] = 0.45 + Math.random() * 0.35
        colors[i * 3 + 1] = 0.1 + Math.random() * 0.15
        colors[i * 3 + 2] = 0.85 + Math.random() * 0.15
      } else {
        // white/silver
        const b = 0.65 + Math.random() * 0.35
        colors[i * 3] = b * 0.9
        colors[i * 3 + 1] = b * 0.95
        colors[i * 3 + 2] = b
      }

      sizes[i] = 0.4 + Math.random() * 1.8
      speeds[i] = 0.25 + Math.random() * 0.75
    }

    return { positions, colors, sizes, speeds }
  }, [])

  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = clock.elapsedTime
  })

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[attrs.positions, 3]} />
        <bufferAttribute attach="attributes-aColor" args={[attrs.colors, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[attrs.sizes, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[attrs.speeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={{ uTime: { value: 0 } }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
