import React, { Suspense, useEffect, useState } from "react";
import { Sky, useProgress, Html, useGLTF } from "@react-three/drei";
import Avatar5 from "../components/Avatar5";
import Gallery from "../components/Gallery";

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
      <Gallery
        position={[1.5, -0.001, -3]}
        scale={[2, 2, 2]}
        rotation={[0, -1.6, 0]}
      />
    </Suspense>
  );
}

export default Skills;
