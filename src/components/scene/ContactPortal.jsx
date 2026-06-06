import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PORTAL_Z = -40

const sphereVert = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vNormal = normal;
    vec3 pos = position;
    float wave = sin(pos.x * 2.8 + uTime * 1.8) * 0.055
               + cos(pos.y * 2.2 + uTime * 1.4) * 0.045;
    pos += normal * wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const sphereFrag = `
  precision mediump float;
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

  void main() {
    vec2 uv = vUv - 0.5;
    float dist = length(uv);
    float angle = atan(uv.y, uv.x);

    float swirl1 = sin(angle * 5.0 + uTime * 1.8 - dist * 10.0);
    float swirl2 = cos(angle * 3.0 - uTime * 1.3 + dist * 7.0);
    float energy = (swirl1 * 0.5 + 0.5) * (swirl2 * 0.5 + 0.5);
    energy = pow(energy, 1.4);

    float core = pow(1.0 - smoothstep(0.0, 0.42, dist), 2.2);
    float ring = smoothstep(0.46, 0.5, dist) * (1.0 - smoothstep(0.5, 0.54, dist));

    vec3 col = uColor * energy * 0.9;
    col += vec3(1.0) * core * 0.95;
    col += uColor * 2.2 * ring;

    float alpha = energy * 0.65 + core * 1.0 + ring * 1.0;
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`

// Converging particle cloud around the portal
const particleVert = `
  attribute float aAngle;
  attribute float aRadius;
  attribute float aSpeed;
  uniform float uTime;
  varying float vAlpha;

  void main() {
    float angle = aAngle + uTime * aSpeed;
    float r = aRadius * (0.85 + sin(uTime * aSpeed * 0.5 + aAngle) * 0.15);
    vec3 pos = vec3(cos(angle) * r, sin(angle) * r, sin(uTime * aSpeed + aAngle * 2.0) * 0.4);
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = clamp(180.0 / -mv.z, 1.0, 5.0);
    gl_Position = projectionMatrix * mv;
    vAlpha = 0.5 + 0.5 * sin(uTime * aSpeed + aAngle);
  }
`

const particleFrag = `
  precision mediump float;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d) * vAlpha * 0.7;
    gl_FragColor = vec4(0.0, 0.85, 1.0, a);
  }
`

const RING_COLORS = ['#00d4ff', '#8b5cf6', '#00ffcc']
const RING_RADII = [2.0, 2.45, 3.0]

export default function ContactPortal() {
  const sphereRef = useRef()
  const sphereMatRef = useRef()
  const ringRefs = useRef([])
  const particleMatRef = useRef()

  const particleAttrs = useMemo(() => {
    const N = 600
    const angles = new Float32Array(N)
    const radii = new Float32Array(N)
    const speeds = new Float32Array(N)
    for (let i = 0; i < N; i++) {
      angles[i] = Math.random() * Math.PI * 2
      radii[i] = 1.8 + Math.random() * 2.0
      speeds[i] = 0.2 + Math.random() * 0.6
    }
    return { angles, radii, speeds }
  }, [])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime

    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.18
      sphereRef.current.rotation.z = t * 0.09
    }
    if (sphereMatRef.current) {
      sphereMatRef.current.uniforms.uTime.value = t
    }
    if (particleMatRef.current) {
      particleMatRef.current.uniforms.uTime.value = t
    }

    ringRefs.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z = t * (0.45 + i * 0.28)
        ring.rotation.x = t * (0.28 + i * 0.18)
        ring.scale.setScalar(1 + Math.sin(t * 0.45 + i) * 0.04)
      }
    })
  })

  return (
    <group position={[0, 0, PORTAL_Z]}>
      {/* Converging particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[new Float32Array(particleAttrs.angles.length * 3), 3]} />
          <bufferAttribute attach="attributes-aAngle" args={[particleAttrs.angles, 1]} />
          <bufferAttribute attach="attributes-aRadius" args={[particleAttrs.radii, 1]} />
          <bufferAttribute attach="attributes-aSpeed" args={[particleAttrs.speeds, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={particleMatRef}
          vertexShader={particleVert}
          fragmentShader={particleFrag}
          uniforms={{ uTime: { value: 0 } }}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Main sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <shaderMaterial
          ref={sphereMatRef}
          vertexShader={sphereVert}
          fragmentShader={sphereFrag}
          uniforms={{
            uTime: { value: 0 },
            uColor: { value: new THREE.Color('#00d4ff') },
          }}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Orbital rings */}
      {RING_RADII.map((r, i) => (
        <mesh key={i} ref={(el) => (ringRefs.current[i] = el)}>
          <torusGeometry args={[r, 0.018, 8, 120]} />
          <meshBasicMaterial
            color={RING_COLORS[i]}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}

      {/* Lights */}
      <pointLight color="#00d4ff" intensity={8} distance={14} decay={2} />
      <pointLight color="#8b5cf6" intensity={4} distance={20} position={[0, 3, 0]} decay={2} />
    </group>
  )
}
