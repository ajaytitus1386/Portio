import {
  // OrbitControls,
  Plane,
  // useHelper
} from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import React, { useRef } from "react"
import {
  // BoxHelper,
  // PlaneHelper,
  // PointLightHelper,
  // SpotLightHelper,
  FrontSide,
} from "three"

import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing"

const colors = {
  neonOrange: 0xffc300,
  neonRed: 0xff5f1f,
  beauBlue: 0xbdd4e7,
  matteGrey: 0x212121,
}

function Box({ position, dimensions, rotation, castShadow = true }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={1}
      rotation={rotation}
      castShadow={castShadow}
      receiveShadow
    >
      <boxGeometry args={dimensions} />
      <meshStandardMaterial color={colors.matteGrey} />
    </mesh>
  )
}

function Pipe({ position }) {
  const cylinderRef = useRef()

  return (
    <mesh
      ref={cylinderRef}
      position={position}
      rotation={[Math.PI / 6, 0, Math.PI / 6]}
      castShadow
      receiveShadow
    >
      <cylinderBufferGeometry args={[0.5, 0.5, 2, 32]} />
      <meshStandardMaterial color={colors.matteGrey} />
    </mesh>
  )
}

function Bulb({ position }) {
  const pointLightRef = useRef(null)
  const matRef = useRef(null)
  const sphereRef = useRef(null)

  // useHelper(pointLightRef, PointLightHelper, 1, "red")

  useFrame(({ clock }) => {
    matRef.current.emissiveIntensity += Math.sin(clock.elapsedTime) / 500
    pointLightRef.current.position.x += Math.sin(clock.elapsedTime) / 500
  })

  return (
    <>
      <pointLight
        position={position}
        dimensions={[1, 1, 1]}
        color={colors.neonOrange}
        intensity={8}
        distance={1.5}
        decay={2}
        ref={pointLightRef}
        castShadow
      ></pointLight>
      <pointLight
        position={position}
        dimensions={[1, 1, 1]}
        color={colors.neonRed}
        intensity={5}
        distance={3}
        decay={1}
        ref={pointLightRef}
        castShadow
      >
        <mesh visible castShadow={false}>
          <sphereGeometry args={[0.2, 32, 32]} scale={0.5} ref={sphereRef} />
          <meshStandardMaterial
            ref={matRef}
            color={colors.neonRed}
            roughness={1}
            metalness={0.4}
            emissive={colors.neonRed}
            emissiveIntensity={1}
          />
        </mesh>
      </pointLight>
    </>
  )
}

function StageLight({
  position,
  color = colors.neonRed,
  distance = 7,
  castShadow = true,
}) {
  const pointLightRef = useRef(null)

  // useHelper(pointLightRef, PointLightHelper, 1, "blue")
  return (
    <pointLight
      ref={pointLightRef}
      position={position}
      color={color}
      intensity={0.8}
      decay={0.5}
      distance={distance}
      castShadow={castShadow}
    />
  )
}

function Floor() {
  const meshRef = useRef()

  // useHelper(meshRef, PlaneHelper, 1, "green")

  return (
    <Plane
      ref={meshRef}
      position={[0, -4, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[50, 50, 50]}
      receiveShadow
    >
      <meshStandardMaterial color={0x2e2e2e} side={FrontSide} />
    </Plane>
  )
}

function Wall(props) {
  const meshRef = useRef()

  return (
    <Plane
      ref={meshRef}
      position={[0, 0, -10]}
      rotation={[0, 0, 0]}
      scale={[50, 50, 50]}
      {...props}
    >
      <meshStandardMaterial color={0x2e2e2e} side={FrontSide} />
    </Plane>
  )
}

const ThreeHeader = () => {
  return (
    <Canvas shadows>
      {/* <OrbitControls /> */}

      <ambientLight intensity={1} color={0xffffff} />

      <StageLight position={[-3, -3, 1]} color={colors.neonOrange} />
      {/* <StageLight
        position={[3, 3, -1]}
        color={colors.beauBlue}
        
      /> */}
      <StageLight position={[-3, 3, 1]} color={colors.beauBlue} distance={7} />
      {/* <StageLight
        position={[3, -3, -1]}
        color={colors.beauBlue}
        
      /> */}
      <StageLight position={[0, -1, -2]} color={colors.neonRed} distance={4} />

      <Bulb position={[1.2, 1.2, 0.8]} />

      <Box
        position={[-1.5, 2, -1]}
        dimensions={[1.5, 1.5, 1.5]}
        rotation={[0, -Math.PI / 4, Math.PI / 4]}
        castShadow={false}
      />
      <Box
        position={[0, 0, 0]}
        dimensions={[2, 2, 2]}
        rotation={[-1, 0, 1]}
        castShadow={false}
      />
      <Pipe position={[-1.0, -2.2, -1.2]} />
      <Box
        position={[1.0, -2.5, -0.5]}
        dimensions={[2, 1, 1]}
        rotation={[0, 0, Math.PI / 3]}
      />

      <Floor />
      <Wall />

      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  )
}

export default ThreeHeader
