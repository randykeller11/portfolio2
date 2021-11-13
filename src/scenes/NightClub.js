import React, { Suspense, useEffect, useState } from "react";
import { Sky, useProgress, Html, useGLTF } from "@react-three/drei";
import Avatar5 from "../components/Avatar5";
import NightClub from "../components/NightClub";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
function Skills() {
  return (
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={0.9} />
      <Sky
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
        distance={450000}
      />
      <Avatar5 />
      <NightClub
        position={[1.5, 4.59, -3]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
    </Suspense>
  );
}

export default Skills;
