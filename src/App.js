import "./App.css";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import AboutMe from "./scenes/AboutMe";
import useSceneStore from "./stores/useSceneStore";
import Skills from "./scenes/Skills";
import Car from "./scenes/Car";
import Gui from "./components/Gui";
import github from "./images/github2.png";

function App() {
  const sceneStore = useSceneStore();
  return (
    <div className="canvas">
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
      <Gui />
      <div className="github">
        <a href="https://github.com/randykeller11/portfolio2">
          <img src={github} />
        </a>
      </div>
    </div>
  );
}

export default App;
