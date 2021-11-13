import React, { Suspense, useEffect, useState } from "react";
import { Sky, useProgress, Html, useGLTF } from "@react-three/drei";
import Avatar5 from "../components/Avatar5";
import Coolroom3 from "../components/Coolroom3";
import Stereo from "../components/Stereo";
import FutureBed from "../components/FutureBed";
import VendingMachine from "../components/VendingMachine";
import Galaxy from "../components/Galaxy";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
function AboutMe() {
  return (
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={0.9} />
      <Sky />
      <Avatar5 />
      <Galaxy position={[3, 9, 8]} scale={[2, 1.2, 2]} />
      <Coolroom3
        position={[-1.5, -0.25, -3]}
        scale={[1.8, 1.2, 1.8]}
        rotation={[0, -1.5, 0]}
      />
      <Stereo
        position={[9, 0, -4.5]}
        scale={[0.4, 0.4, 0.4]}
        rotation={[0, -0.9, 0]}
      />
      <FutureBed
        position={[13, 0, 27]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0, 1.68, 0]}
      />
      <VendingMachine
        position={[-3.2, 0, 23]}
        scale={[0.9, 0.9, 0.9]}
        rotation={[0, 1, 0]}
      />
    </Suspense>
  );
}

export default AboutMe;
