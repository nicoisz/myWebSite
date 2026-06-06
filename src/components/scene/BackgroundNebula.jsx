import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vert = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const frag = `
  precision mediump float;
  uniform float uTime;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.1;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.025;

    float n1 = fbm(uv * 2.5 + vec2(t, t * 0.6));
    float n2 = fbm(uv * 4.0 + vec2(-t * 1.2, t * 0.4));
    float n3 = fbm(uv * 1.5 - vec2(t * 0.3, -t * 0.5));

    vec3 deep = vec3(0.001, 0.001, 0.014);
    vec3 nebulaCyan = vec3(0.0, 0.06, 0.14);
    vec3 nebulaPurple = vec3(0.05, 0.0, 0.1);
    vec3 nebulaBlue = vec3(0.0, 0.03, 0.1);

    vec3 col = mix(deep, nebulaCyan, n1 * 0.5);
    col = mix(col, nebulaPurple, n2 * 0.4);
    col = mix(col, nebulaBlue, n3 * 0.3);

    // stars
    float star = hash(uv * 1800.0 + 0.5);
    if (star > 0.997) {
      float b = (star - 0.997) * 333.3;
      col += vec3(b * 0.7, b * 0.85, b);
    }

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function BackgroundNebula() {
  const mat = useRef()

  useFrame(({ clock }) => {
    if (mat.current) mat.current.uniforms.uTime.value = clock.elapsedTime
  })

  return (
    <mesh>
      <sphereGeometry args={[80, 32, 32]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={{ uTime: { value: 0 } }}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  )
}
