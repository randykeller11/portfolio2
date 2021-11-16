import "./App.css";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import AboutMe from "./scenes/AboutMe";
import useSceneStore from "./stores/useSceneStore";
import Skills from "./scenes/Skills";
import Car from "./scenes/Car";

function App() {
  const sceneStore = useSceneStore();
  return (
    <>
      <Suspense fallback={null}>
        {sceneStore.scene === 0 && (
          <Canvas camera={{ position: [0, 4, -6] }}>
            <AboutMe />
          </Canvas>
        )}
        {sceneStore.scene === 1 && (
          <Canvas camera={{ position: [0, 4, -6] }}>
            <Skills />
          </Canvas>
        )}

        {sceneStore.scene === 2 && <Car />}
      </Suspense>
    </>
  );
}

export default App;
