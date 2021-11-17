import React, { useState, useEffect } from "react";
import "./Gui.css";
import headshot from "../images/headshot.png";

function Gui() {
  return (
    <div className="gui">
      <img src={headshot} />
    </div>
  );
}

export default Gui;
