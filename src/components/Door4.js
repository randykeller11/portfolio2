/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import useDoorStore from "../stores/useDoorStore";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/door4.glb");
  const { actions } = useAnimations(animations, group);
  const doorStore = useDoorStore();

  useEffect(() => {
    actions["door_open"].clampWhenFinished = true;

    actions["door_open"].setLoop(THREE.LoopOnce);
  }, []);

  useEffect(() => {
    if (doorStore.nextDoorOpen) {
      actions["door_open"].clampWhenFinished = true;
      actions["door_open"].play();
      doorStore.toggleNext(false);
    }
  }, [doorStore.nextDoorOpen]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh
              geometry={nodes.door01_low001_door_0.geometry}
              material={materials.door}
              skeleton={nodes.door01_low001_door_0.skeleton}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={700.37}>
            <mesh
              geometry={nodes.Plane005_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/door4.glb");
