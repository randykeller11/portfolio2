import React, { Suspense, useEffect, useState } from "react";
import { Sky, useProgress, Html, useGLTF } from "@react-three/drei";
import Avatar5 from "../components/Avatar5";
import Office from "../components/Office";
import Door4 from "../components/Door4";

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
      <Office
        position={[17, -0.001, -6]}
        scale={[2, 2, 2]}
        rotation={[0, 3.2, 0]}
      />
    </Suspense>
  );
}

export default Skills;
