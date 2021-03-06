import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics, useCylinder, usePlane } from "@react-three/cannon";
import {
  OrbitControls,
  Environment,
  useProgress,
  Html,
} from "@react-three/drei";
import Vehicle from "../components/Vehicle";
import Office from "../components/Office";
import Loader from "../components/Loader";

export default function Car() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas dpr={[1, 1.5]} shadows camera={{ position: [0, 5, 15], fov: 50 }}>
        <ambientLight intensity={0.9} />
        <Sky />
        <Office
          scale={[3, 3, 3]}
          position={[30, 0.05, -10]}
          rotation={[0, 2.5, 0]}
        />
        <Physics
          broadphase="SAP"
          contactEquationRelaxation={4}
          friction={1e-3}
          allowSleep
        >
          <Plane rotation={[-Math.PI / 2, 0, 0]} userData={{ id: "floor" }} />
          <Vehicle
            position={[0, 2, 0]}
            rotation={[0, -Math.PI / 4, 0]}
            angularVelocity={[0, 0.5, 0]}
            wheelRadius={0.3}
          />
          <Pillar position={[-2, 2.5, 10]} userData={{ id: "pillar-1" }} />
          <Pillar position={[-12, 2.5, 20]} userData={{ id: "pillar-2" }} />
          <Pillar position={[-13, 2.5, 30]} userData={{ id: "pillar-3" }} />
          <Pillar position={[-2, 2.5, -7]} userData={{ id: "pillar-4" }} />
          <Pillar position={[-5, 2.5, -10]} userData={{ id: "pillar-5" }} />
          <Pillar position={[-10, 2.5, -15]} userData={{ id: "pillar-6" }} />
        </Physics>
      </Canvas>
    </Suspense>
  );
}

function Plane(props) {
  const [ref] = usePlane(() => ({
    type: "Static",
    material: "ground",
    ...props,
  }));
  return (
    <group ref={ref}>
      <mesh receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
    </group>
  );
}

function Pillar({ args = [0.7, 0.7, 5, 16], ...props }) {
  const [ref] = useCylinder(() => ({ mass: 10, args, ...props }));
  return (
    <mesh ref={ref} castShadow>
      <cylinderGeometry args={args} />
      <meshNormalMaterial />
    </mesh>
  );
}
