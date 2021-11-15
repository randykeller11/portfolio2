import React from "react";
import { SpriteMaterial } from "three";

const SkillIcon = ({ icon, position, scale }) => {
  const material = new SpriteMaterial({ map: icon });
  return <sprite material={material} position={position} scale={scale} />;
};

export default SkillIcon;
