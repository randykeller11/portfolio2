import React, { Suspense, useEffect, useState } from "react";
import { Sky, useProgress, Html, useTexture } from "@react-three/drei";
import PortAv0 from "../components/PortAv0";
import PortAv1 from "../components/PortAv1";
import PortAv2 from "../components/PortAv2";
import PortAv3 from "../components/PortAv3";
import PortAv4 from "../components/PortAv4";
import PortAv5 from "../components/PortAv5";
import Gallery from "../components/Gallery";
import Door4 from "../components/Door4";
import PrevDoor from "../components/PrevDoor";
import SkillIcon from "../components/SkillIcon";
import Avatar5 from "../components/Avatar5";
import useSceneStore from "../stores/useSceneStore";
import Loader from "../components/Loader";
import { SkillsSign } from "../components/Posters";
import Video from "../components/Video";
import Portal from "../components/Portal";
function Skills() {
  const icons = useTexture([
    "/assets/react.png",
    "/assets/node.png",
    "/assets/three.png",
    "/assets/zustand.png",
    "/assets/yjs.png",
    "/assets/firebase2.png",
    "/assets/next.png",
    "/assets/redux.jpeg",
    "/assets/css.png",
    "/assets/blender.png",
    "/assets/mixamo.png",
  ]);
  const sceneStore = useSceneStore();

  return (
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={0.9} />
      <Sky
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
        distance={450000}
      />
      {sceneStore.avatar === 0 && <PortAv0 />}
      {sceneStore.avatar === 1 && <PortAv1 />}
      {sceneStore.avatar === 2 && <PortAv2 />}
      {sceneStore.avatar === 3 && <PortAv3 />}
      {sceneStore.avatar === 4 && <PortAv4 />}
      {sceneStore.avatar === 5 && <PortAv5 />}
      {sceneStore.isLocked[sceneStore.scene] && <Avatar5 />}
      <Gallery
        position={[1.5, -0.001, -3]}
        scale={[2, 2, 2]}
        rotation={[0, -1.6, 0]}
      />
      <Door4 position={[9, -0.1, -9.5]} scale={[0.4, 1.7, 1]} />
      <mesh
        position={[9, 1.8, -9.6]}
        scale={[1.3, 0.9, 1]}
        rotation={[0, 0, -1.56]}
      >
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" color="black" />
      </mesh>
      <Portal
        position={[9, 2, -9.45]}
        scale={[0.85, 0.85, 0.85]}
        rotation={[0, 0, 0]}
      />
      <PrevDoor position={[-6, -0.1, -9.5]} scale={[0.4, 1.7, 1]} />
      <mesh
        position={[-6, 1.8, -10]}
        scale={[1.3, 0.9, 1]}
        rotation={[0, 0, -1.56]}
      >
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" color="black" />
      </mesh>

      <Portal
        position={[-6, 2, -9.9]}
        scale={[0.85, 0.85, 0.85]}
        rotation={[0, 0, 0]}
      />
      <SkillIcon
        icon={icons[0]}
        position={[0.5, 2.7, 16]}
        scale={[2.5, 2.5, 1]}
      />
      <SkillIcon
        icon={icons[1]}
        position={[5, 2.4, 16]}
        scale={[2.5, 2.5, 1]}
      />
      <SkillIcon
        icon={icons[2]}
        position={[-4.1, 2.7, 15.5]}
        scale={[3.5, 2.5, 1]}
      />
      <SkillIcon
        icon={icons[3]}
        position={[-0.5, 3.75, -9]}
        scale={[4, 3, 1]}
      />
      <SkillIcon
        icon={icons[4]}
        position={[3.5, 3.75, -9]}
        scale={[2.5, 2.5, 1]}
      />
      <SkillIcon
        icon={icons[5]}
        position={[10.9, 2.5, 1.9]}
        scale={[4.5, 3.5, 1]}
      />

      <SkillIcon icon={icons[6]} position={[10.5, 2.4, -2]} scale={[3, 2, 1]} />

      <SkillIcon
        icon={icons[9]}
        position={[-9, 2, 9.5]}
        scale={[2.5, 2.5, 1]}
      />
      <SkillIcon
        icon={icons[10]}
        position={[-9, 2.25, 14]}
        scale={[4, 2.3, 1]}
      />
      <SkillsSign />
      <Video
        position={[11.8, 2.6, 13]}
        scale={[9, 4, 1]}
        rotation={[0, -Math.PI / 2, 0]}
        video="/sandboxVid2.mp4"
      />
      <Video
        position={[-10.15, 2.5, -1.5]}
        scale={[9, 4, 1]}
        rotation={[0, Math.PI / 2, 0]}
        video="/sandboxVid2.mp4"
      />
    </Suspense>
  );
}

export default Skills;
