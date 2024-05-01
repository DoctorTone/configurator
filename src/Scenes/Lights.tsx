import React from "react";
import { SCENE } from "../state/Config.js";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
    </>
  );
};

export default Lights;
