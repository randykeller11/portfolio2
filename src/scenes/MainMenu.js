import React from "react";
import portAv0 from "../images/portAv0.png";
import portAv1 from "../images/portAv1.png";
import portAv2 from "../images/portAv2.png";
import portAv3 from "../images/portAv3.png";
import portAv4 from "../images/portAv4.png";
import portAv5 from "../images/portAv5.png";

import useSceneStore from "../stores/useSceneStore";

import "./MainMenu.css";
function MainMenu() {
  const sceneStore = useSceneStore();

  return (
    <div className="mainMenu">
      <div className="avatars">
        <div className="row">
          <img
            src={portAv0}
            onClick={() => {
              sceneStore.setAvatar(0);
            }}
          />
          <img
            src={portAv1}
            onClick={() => {
              sceneStore.setAvatar(1);
            }}
          />
          <img
            src={portAv2}
            onClick={() => {
              sceneStore.setAvatar(2);
            }}
          />
        </div>
        <div className="row">
          <img
            src={portAv3}
            onClick={() => {
              sceneStore.setAvatar(3);
            }}
          />
          <img
            src={portAv4}
            onClick={() => {
              sceneStore.setAvatar(4);
            }}
          />
          <img
            src={portAv5}
            onClick={() => {
              sceneStore.setAvatar(5);
            }}
          />
        </div>
      </div>
      <div className="header">
        <h1>Welcome to my portfolio site!</h1>
        <h2>Choose your avatar</h2>
      </div>
    </div>
  );
}

export default MainMenu;
