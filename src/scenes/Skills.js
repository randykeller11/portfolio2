import React, { Suspense, useEffect, useState } from "react";
import { Sky, useProgress, Html, useGLTF } from "@react-three/drei";
import Avatar5 from "../components/Avatar5";
import Gallery from "../components/Gallery";
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
      <Gallery
        position={[1.5, -0.001, -3]}
        scale={[2, 2, 2]}
        rotation={[0, -1.6, 0]}
      />
      <Door4 next={true} position={[7, -0.1, -9.5]} scale={[0.4, 1.7, 1]} />
    </Suspense>
  );
}

export default Skills;
