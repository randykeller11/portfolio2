import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import portalTexture from "../images/portal5.png";

function Portal({ ...props }) {
  const portalRef = useRef();
  const texture = useLoader(THREE.TextureLoader, portalTexture);
  useFrame(() => {
    portalRef.current.rotation.z = portalRef.current.rotation.z + 0.015;
  });
  return (
    <mesh ref={portalRef} {...props}>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

export default Portal;
