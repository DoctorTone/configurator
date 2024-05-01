/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\vases.gltf --transform -t 
Files: .\vases.gltf [320.93KB] > C:\Users\tony\Documents\Github\configurator\public\models\vases-transformed.glb [28.35KB] (91%)
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    vase_c: THREE.Mesh;
  };
  materials: {
    vase: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Vase(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./models/vases.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.vase_c.geometry}
        rotation={[Math.PI / 2, 0, -2.356]}
        scale={0.1}
      >
        <meshStandardMaterial color={"lightblue"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/vases.glb");
