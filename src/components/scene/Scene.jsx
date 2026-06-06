import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'
import CameraRig from './CameraRig'
import BackgroundNebula from './BackgroundNebula'
import ParticleField from './ParticleField'
import FloatingStructures from './FloatingStructures'
import TechGalaxy from './TechGalaxy'
import ProjectsShowcase from './ProjectsShowcase'
import ContactPortal from './ContactPortal'

const CANVAS_STYLE = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 0,
  pointerEvents: 'auto',
}

export default function Scene() {
  return (
    <Canvas
      style={CANVAS_STYLE}
      camera={{ position: [0, 0, 8], fov: 70, near: 0.1, far: 200 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.1,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#00000a'))
      }}
    >
      <Suspense fallback={null}>
        <BackgroundNebula />
        <ParticleField />
        <FloatingStructures />
        <TechGalaxy />
        <ProjectsShowcase />
        <ContactPortal />
      </Suspense>

      <CameraRig />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.18}
          luminanceSmoothing={0.82}
          intensity={1.4}
          radius={0.45}
          blendFunction={BlendFunction.ADD}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0004, 0.0004]}
        />
      </EffectComposer>

      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </Canvas>
  )
}
