import React, { Suspense } from "react";
import Avatar5 from "../components/Avatar5";
import { useProgress, Html } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
function Test() {
  return (
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={0.9} />

      <Avatar5 />
    </Suspense>
  );
}

export default Test;
