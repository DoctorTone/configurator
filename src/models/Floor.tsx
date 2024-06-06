import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Floor = (props: JSX.IntrinsicElements["group"]) => {
  const texture = useTexture("./textures/laminate_floor.jpg");
  texture.repeat.set(8, 8);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <group {...props}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[25, 12]} />
        <meshLambertMaterial map={texture} />
      </mesh>
    </group>
  );
};
