import React, { Suspense, useEffect, useState } from "react";
import { Sky, useProgress, Html, useTexture } from "@react-three/drei";
import PortAv1 from "../components/PortAv1";
import Gallery from "../components/Gallery";
import Door4 from "../components/Door4";
import PrevDoor from "../components/PrevDoor";
import SkillIcon from "../components/SkillIcon";
import Avatar5 from "../components/Avatar5";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Skills() {
  const icons = useTexture([
    "/assets/react.png",
    "/assets/node.png",
    "/assets/three.png",
    "/assets/zustand.png",
    "/assets/drei.jpeg",
    "/assets/firebase2.png",
    "/assets/next.png",
    "/assets/html.png",
    "/assets/css.png",
    "/assets/blender.png",
    "/assets/mixamo.png",
  ]);
  return (
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={0.9} />
      <Sky
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
        distance={450000}
      />
      <PortAv1 />
      <Avatar5
        position={[1.5, 0, 2]}
        scale={[1.1, 1.1, 1.1]}
        rotation={[0, Math.PI / 1, 0]}
      />
      <Gallery
        position={[1.5, -0.001, -3]}
        scale={[2, 2, 2]}
        rotation={[0, -1.6, 0]}
      />
      <Door4 position={[7, -0.1, -9.5]} scale={[0.4, 1.7, 1]} />
      <PrevDoor position={[-4, -0.1, -9.5]} scale={[0.4, 1.7, 1]} />
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
        position={[-9.1, 2.2, 10]}
        scale={[3.5, 2.5, 1]}
      />
      <SkillIcon
        icon={icons[4]}
        position={[-9.5, 2.2, 14]}
        scale={[3, 2.5, 1]}
      />
      <SkillIcon
        icon={icons[5]}
        position={[10.5, 2.2, 15]}
        scale={[4.5, 3.5, 1]}
      />
      <SkillIcon
        icon={icons[6]}
        position={[10.5, 2.2, 10.9]}
        scale={[3, 2, 1]}
      />
      <SkillIcon
        icon={icons[7]}
        position={[10.5, 2.4, 1.3]}
        scale={[2.5, 2, 1]}
      />
      <SkillIcon
        icon={icons[8]}
        position={[10.5, 2.4, -2.8]}
        scale={[2.8, 2.2, 1]}
      />
      <SkillIcon
        icon={icons[9]}
        position={[-9, 2.4, 1]}
        scale={[2.8, 2.8, 1]}
      />
      <SkillIcon
        icon={icons[10]}
        position={[-9, 2.4, -3.5]}
        scale={[4, 2.8, 1]}
      />
    </Suspense>
  );
}

export default Skills;
