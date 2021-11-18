import React, { useState, useEffect } from "react";
import "./Gui.css";
import headshot from "../images/headshot.png";
import useSceneStore from "../stores/useSceneStore";

function Gui() {
  let sceneStore = useSceneStore();
  let guiCSS = sceneStore.scene === 3 ? "guiCar" : "gui";

  return (
    <div className={guiCSS}>
      <img src={headshot} />
      <div className="body">
        <h2
          onClick={() => {
            let localArray = [...sceneStore.isLocked];
            localArray[sceneStore.scene] = false;
            sceneStore.toggleLock(localArray);
          }}
        >
          x
        </h2>
        {sceneStore.scene === 1 && (
          <h3>
            Hi I'm Randy. Welcome to my portfolio website! You can walk around
            with the AWD keys on your keyboard. This is my digital home office
            and a bit of an about me section. When you finish looking around,
            meet me in the next room by walking through the automatic doors
            behind me.
          </h3>
        )}
        {sceneStore.scene === 2 && (
          <h3>
            Welcome to the skills section! Most of the technologies in this room
            were used to make this site. The next room contains a physics demo
            using the library cannon.js. Also checkout my prototype scene
            builder app called XRSandbox. The link is on the wall behind you!
          </h3>
        )}
        {sceneStore.scene === 3 && (
          <h4>
            You made it to the physics demo! This is my rework of the cannon.js
            car example. Use WASD to drive the car. I added a first person
            camera and some simple models to make the driving experience more
            interesting. Click the reset button to start over and press exit in
            the top left to return to the skills section.
          </h4>
        )}
      </div>
    </div>
  );
}

export default Gui;
