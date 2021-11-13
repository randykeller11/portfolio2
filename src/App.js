import "./App.css";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import AboutMe from "./scenes/AboutMe";
import useSceneStore from "./stores/useSceneStore";
import Skills from "./scenes/Skills";
import MainRoom from "./scenes/MainRoom";
import NightClub from "./scenes/NightClub";

function App() {
  const sceneStore = useSceneStore();
  return (
    <>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 4, -6] }}>
          {sceneStore.scene === 0 && <AboutMe />}
          {sceneStore.scene === 1 && <Skills />}
          {sceneStore.scene === 2 && <MainRoom />}
          {sceneStore.scene === 3 && <NightClub />}
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
