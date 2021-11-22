import "./App.css";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import AboutMe from "./scenes/AboutMe";
import useSceneStore from "./stores/useSceneStore";
import useDoorStore from "./stores/useDoorStore";

import Skills from "./scenes/Skills";
import Car from "./scenes/Car";

import Gui from "./components/Gui";
import Loader from "./components/Loader";
import Galaxy from "./components/Galaxy";

import github from "./images/github2.png";
import MainMenu from "./scenes/MainMenu";

function App() {
  const sceneStore = useSceneStore();
  const doorStore = useDoorStore();

  const handleCarReset = () => {
    let target = sceneStore.scene === 3 ? 4 : 3;
    sceneStore.carReset(target);
  };

  return (
    <div className="canvas">
      {sceneStore.isLoaded && sceneStore.scene === 0 && <MainMenu />}
      <Suspense fallback={null}>
        {sceneStore.scene === 0 && (
          <Canvas camera={{ position: [5, -7, -15] }}>
            <Suspense fallback={<Loader />}>
              <Galaxy rotation={[0, 0, 0.1]} />
            </Suspense>
          </Canvas>
        )}
        {sceneStore.scene === 1 && (
          <Canvas camera={{ position: [0, 4, -6] }}>
            <AboutMe />
          </Canvas>
        )}
        {sceneStore.scene === 2 && (
          <Canvas camera={{ position: [0, 4, -6] }}>
            <Skills />
          </Canvas>
        )}

        {sceneStore.scene === 3 && <Car />}
        {sceneStore.scene === 4 && <Car />}
      </Suspense>

      {sceneStore.isLocked[sceneStore.scene] &&
        sceneStore.isLoaded &&
        sceneStore.scene < 3 &&
        sceneStore.scene > 0 && <Gui />}
      {sceneStore.scene === 3 && (
        <>
          <div className="navigation">
            <h1 onClick={handleCarReset}>Reset</h1>
            <h1
              onClick={() => {
                doorStore.carExit();
                sceneStore.carExit();
              }}
            >
              Exit
            </h1>
          </div>
          {sceneStore.isLocked[sceneStore.scene] && <Gui />}
        </>
      )}
      {sceneStore.scene === 4 && (
        <>
          <div className="navigation">
            <h1 onClick={handleCarReset}>Reset</h1>
            <h1
              onClick={() => {
                doorStore.carExit();
                sceneStore.carExit();
              }}
            >
              Exit
            </h1>
          </div>
        </>
      )}
      <div className="github">
        <a href="https://github.com/randykeller11">
          <img src={github} />
        </a>
      </div>
    </div>
  );
}

export default App;
