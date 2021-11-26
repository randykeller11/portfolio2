import React, { useEffect } from "react";
import { useProgress, Html } from "@react-three/drei";
import useSceneStore from "../stores/useSceneStore";

function Loader() {
  const sceneStore = useSceneStore();
  const { progress } = useProgress();
  let dispNum = Math.round(progress * 100) / 100;
  useEffect(() => {
    return function cleanup() {
      sceneStore.toggleLoaded(true);
    };
  }, []);
  return (
    <>
      <Html style={{ top: "40vh" }} right>
        Fullscreen recommended
      </Html>
      <Html style={{ right: "43vw", top: "14vh" }} right>
        Netlify can be a little slow for non enterprise accounts. You can
        checkout my github in the meantime 👇🏾
      </Html>
      <Html center>Building a small digital universe: {dispNum}%</Html>
    </>
  );
}

export default Loader;
