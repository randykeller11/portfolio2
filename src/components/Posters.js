import React from "react";
import * as THREE from "three";

import dilla from "../images/jayDee2.png";
import cavs from "../images/cavs.jpg";
import skillsDoor from "../images/skillsDoor.png";

import { useLoader } from "@react-three/fiber";

export function DillaPoster() {
  const texture = useLoader(THREE.TextureLoader, dilla);
  return (
    <mesh
      position={[11, 3.3, -5.2]}
      scale={[0.8, 0.8, 1]}
      rotation={[0, -1.5, 0]}
    >
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}
export function CavsPoster() {
  const texture = useLoader(THREE.TextureLoader, cavs);
  return (
    <mesh
      position={[13.5, 3.6, 28.9]}
      scale={[2.2, 1.2, 1]}
      rotation={[0, 3.22, 0]}
    >
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

export function SkillsDoor() {
  const texture = useLoader(THREE.TextureLoader, skillsDoor);
  return (
    <mesh position={[1.5, 2, 24]} scale={[1, 1.4, 1]} rotation={[0, 3.2, 0]}>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}
