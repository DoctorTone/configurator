/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\vases.gltf --transform -t 
Files: .\vases.gltf [320.93KB] > C:\Users\tony\Documents\Github\configurator\public\models\vases-transformed.glb [28.35KB] (91%)
*/

import { Mesh, MeshStandardMaterial, Group } from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { SCENE } from "../state/Config";

type GLTFResult = GLTF & {
  nodes: {
    vase_c: Mesh;
  };
  materials: {
    vase: MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Vase(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./models/vases.glb") as GLTFResult;
  const pattern = useTexture("./textures/alcohol.jpg");
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    groupRef.current!.rotation.y += delta * SCENE.ROTATION_SPEED;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.vase_c.geometry}
        rotation={[Math.PI / 2, 0, -2.356]}
        scale={0.1}
      >
        <meshStandardMaterial map={pattern} roughness={0} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/vases.glb");
