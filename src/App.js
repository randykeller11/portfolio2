import "./App.css";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import AboutMe from "./scenes/AboutMe";
import useSceneStore from "./stores/useSceneStore";
import Test from "./scenes/Test";

function App() {
  const sceneStore = useSceneStore();
  return (
    <>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 4, -6] }}>
          {sceneStore.scene === 0 && <AboutMe />}
          {sceneStore.scene === 1 && <Test />}
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
