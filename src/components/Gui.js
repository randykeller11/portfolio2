import React, { useState, useEffect } from "react";
import "./Gui.css";
import headshot from "../images/headshot.png";

import headshot2 from "../images/headshot2.png";
import useSceneStore from "../stores/useSceneStore";

function Gui() {
  let sceneStore = useSceneStore();
  let guiCSS = sceneStore.scene === 3 ? "guiCar" : "gui";

  return (
    <div className={guiCSS}>
      {sceneStore.scene === 1 && <img src={headshot2} />}
      {sceneStore.scene === 2 && <img src={headshot2} />}
      {sceneStore.scene === 3 && <img src={headshot} />}
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
            with the AWD keys on your keyboard. This is my digital office and a
            bit of an about me section. When you finish looking around, meet me
            in the next room by walking through the automatic doors behind me.
          </h3>
        )}
        {sceneStore.scene === 2 && (
          <h3>
            Welcome to the skills section! Most of the technologies in this room
            were used to make this site. Behind you is a demo for my prototype
            scene builder application. If you would like to look under the hood,
            click the github link in the bottom left of your screen. The next
            room contains a fun first person driving experience with physics
            using the library cannon.js.
          </h3>
        )}
        {sceneStore.scene === 3 && (
          <h4>
            You made it to the physics demo! This is my rework of the cannon.js
            car example. Use WASD to drive the car and the spacebar to brake. I
            added a first person camera and some simple models to make the
            driving experience more interesting. Click the reset button to start
            over and press exit in the top right to return to the skills
            section.
          </h4>
        )}
      </div>
    </div>
  );
}

export default Gui;
