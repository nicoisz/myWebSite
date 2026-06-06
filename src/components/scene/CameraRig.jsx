import { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollStore } from '../../store/scrollStore'

gsap.registerPlugin(ScrollTrigger)

// Full camera journey as a CatmullRom spline
const camPath = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 8),       // 0.0 Hero
  new THREE.Vector3(0, 0.4, 6.5),   // 0.12
  new THREE.Vector3(0, 0.8, 4),     // 0.22 About
  new THREE.Vector3(-1.5, 0.5, 1),  // 0.34
  new THREE.Vector3(-0.5, 0, -8),   // 0.44 Approaching Tech Galaxy
  new THREE.Vector3(0, 0.5, -12),   // 0.54 Inside Tech Galaxy
  new THREE.Vector3(1.2, 1.0, -17), // 0.64
  new THREE.Vector3(0.5, 0.2, -20), // 0.72 Projects
  new THREE.Vector3(0, 0, -24),     // 0.82 Projects deep
  new THREE.Vector3(0, 0, -29),     // 0.90 Contact approach
  new THREE.Vector3(0, 0, -34),     // 1.0  Near portal
])

const lookPath = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, -2),
  new THREE.Vector3(0, 0, -4),
  new THREE.Vector3(-0.5, 0, -8),
  new THREE.Vector3(0, 0, -13),
  new THREE.Vector3(0, 0, -15),
  new THREE.Vector3(0, 0, -20),
  new THREE.Vector3(0, 0, -23),
  new THREE.Vector3(0, 0, -28),
  new THREE.Vector3(0, 0, -36),
  new THREE.Vector3(0, 0, -44),
])

const _pos = new THREE.Vector3()
const _look = new THREE.Vector3()
const _mat = new THREE.Matrix4()
const _quat = new THREE.Quaternion()

export default function CameraRig() {
  const { camera } = useThree()
  const progress = useRef({ value: 0 })

  useEffect(() => {
    const onMouse = (e) => {
      scrollStore.mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      scrollStore.mouseY = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    // Give DOM a tick to paint before registering
    const timer = setTimeout(() => {
      gsap.to(progress.current, {
        value: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.8,
          onUpdate: (self) => {
            scrollStore.progress = self.progress
          },
        },
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', onMouse)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  useFrame((_, delta) => {
    const t = Math.min(progress.current.value, 0.9999)

    camPath.getPoint(t, _pos)
    lookPath.getPoint(t, _look)

    const mx = scrollStore.mouseX * 0.28
    const my = scrollStore.mouseY * 0.18

    _pos.x += mx * 0.3
    _pos.y += my * 0.3
    _look.x += mx * 0.6
    _look.y += my * 0.6

    camera.position.lerp(_pos, delta * 2.5)

    _mat.lookAt(camera.position, _look, camera.up)
    _quat.setFromRotationMatrix(_mat)
    camera.quaternion.slerp(_quat, delta * 2.5)
  })

  return null
}
