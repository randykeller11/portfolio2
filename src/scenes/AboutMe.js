import React, { Suspense, useEffect, useState } from "react";
import { Sky } from "@react-three/drei";
import PortAv0 from "../components/PortAv0";
import PortAv1 from "../components/PortAv1";
import PortAv2 from "../components/PortAv2";
import PortAv3 from "../components/PortAv3";
import PortAv4 from "../components/PortAv4";
import PortAv5 from "../components/PortAv5";
import Coolroom3 from "../components/Coolroom3";
import Stereo from "../components/Stereo";
import Hoop from "../components/Hoop";
import Basketball from "../components/Basketball";
import VendingMachine from "../components/VendingMachine";
import Galaxy from "../components/Galaxy";
import Djbooth from "../components/Djbooth";
import GolfClock from "../components/GolfClock";
import Guitar from "../components/Guitar";
import Portal from "../components/Portal";

import {
  DillaPoster,
  CavsPoster,
  SkillsDoor,
  AboutMeInfo,
} from "../components/Posters";
import Door4 from "../components/Door4";
import Avatar5 from "../components/Avatar5";
import useSceneStore from "../stores/useSceneStore";
import Loader from "../components/Loader";

function AboutMe() {
  const sceneStore = useSceneStore();

  return (
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={0.9} />

      <Sky />
      {sceneStore.scene > 0 && sceneStore.avatar === 0 && <PortAv0 />}
      {sceneStore.scene > 0 && sceneStore.avatar === 1 && <PortAv1 />}
      {sceneStore.scene > 0 && sceneStore.avatar === 2 && <PortAv2 />}
      {sceneStore.scene > 0 && sceneStore.avatar === 3 && <PortAv3 />}
      {sceneStore.scene > 0 && sceneStore.avatar === 4 && <PortAv4 />}
      {sceneStore.scene > 0 && sceneStore.avatar === 5 && <PortAv5 />}
      {sceneStore.scene > 0 && sceneStore.isLocked[sceneStore.scene] && (
        <Avatar5 />
      )}
      <Galaxy position={[3, 9, 10]} scale={[2, 1.2, 2]} />
      <Coolroom3
        position={[-1.5, -0.25, -3]}
        scale={[1.8, 1.2, 1.8]}
        rotation={[0, -1.5, 0]}
      />

      <DillaPoster />
      <CavsPoster />
      <AboutMeInfo />
      <Stereo
        position={[10, 0, -4.85]}
        scale={[0.4, 0.4, 0.4]}
        rotation={[0, -1.4, 0]}
      />

      <GolfClock
        position={[12.3, 3.2, 13.5]}
        scale={[5, 5, 5]}
        rotation={[0, -1.5, 0]}
      />

      <Guitar
        position={[17.2, 1.5, 16.1]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0, 0, 1.55]}
      />
      <Hoop
        position={[-5.8, 3, 36.5]}
        scale={[3, 3, 2]}
        rotation={[0, 1.6, 0]}
      />
      <Basketball
        position={[9.5, 0.2, 28.5]}
        scale={[0.45, 0.45, 0.45]}
        rotation={[0, 0, 0.7]}
      />
      <VendingMachine
        position={[-3.2, 0, 23]}
        scale={[0.9, 0.9, 0.9]}
        rotation={[0, 1, 0]}
      />
      <Door4
        position={[1.6, -0.2, 24]}
        scale={[0.4, 1.7, 1]}
        rotation={[0, 0.1, 0]}
      />
      <mesh
        position={[1.8, 1.7, 24.01]}
        scale={[1.2, 0.9, 1]}
        rotation={[0, 3.2, -1.56]}
      >
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" color="black" />
      </mesh>
      <Portal
        position={[1.6, 1.9, 24]}
        scale={[0.85, 0.85, 0.85]}
        rotation={[0, 3.2, 0]}
      />
      <Djbooth
        position={[21.48, -1, 16.05]}
        scale={[1.35, 1.35, 1.35]}
        rotation={[0, -0.8, 0]}
      />
    </Suspense>
  );
}

export default AboutMe;
