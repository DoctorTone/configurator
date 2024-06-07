/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: baneon (https://sketchfab.com/baneon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wooden-table-a745fdd7c808472a8f70342cc6d5a4d7
Title: Wooden table
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Table_Wood_0: THREE.Mesh;
    Support_Wood_0: THREE.Mesh;
    Leg_Wood_0: THREE.Mesh;
    Leg001_Wood_0: THREE.Mesh;
    Leg002_Wood_0: THREE.Mesh;
    Leg003_Wood_0: THREE.Mesh;
  };
  materials: {
    Wood: THREE.MeshStandardMaterial;
  };
};

export function Table(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./models/wooden_table.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 12.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Table_Wood_0.geometry}
            material={materials.Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Support_Wood_0.geometry}
            material={materials.Wood}
            position={[0, 0, 0.11]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Leg_Wood_0.geometry}
            material={materials.Wood}
            position={[-0.106, 0.106, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Leg001_Wood_0.geometry}
            material={materials.Wood}
            position={[-0.106, -0.106, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Leg002_Wood_0.geometry}
            material={materials.Wood}
            position={[0.106, -0.106, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Leg003_Wood_0.geometry}
            material={materials.Wood}
            position={[0.106, 0.106, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/wooden_table.glb");
