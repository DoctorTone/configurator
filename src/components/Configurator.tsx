import { Suspense } from "react";
import { Group } from "three";
import { SCENE } from "../state/Config";
import { Loading } from "../components/Loading";
import { Vase } from "../models/Vases";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Shelf } from "../models/Shelf";
import { RoundTable } from "../models/RoundTable";
import { Stand } from "../models/Stand";
import { Stage, Shadow } from "@react-three/drei";
import useStore from "../state/store";

const Configurator = () => {
  const isRotating = useStore((state) => state.isRotating);
  const currentTable = useStore((state) => state.currentTable);
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (isRotating) {
      groupRef.current!.rotation.y += delta * SCENE.ROTATION_SPEED;
    }
  });

  return (
    <Suspense fallback={<Loading />}>
      <Stage
        adjustCamera={1}
        shadows="contact"
        intensity={0.5}
        environment="city"
      >
        <group ref={groupRef}>
          <Vase scale={0.5} position={[0, 1, 0]} />
          <Shadow
            color="black"
            scale={0.5}
            opacity={0.95}
            position={[0, 1.01, 0]}
          />
          {currentTable === "round" && <RoundTable />}
          {currentTable === "stand" && (
            <Stand scale={0.015} position-y={-0.1} />
          )}
          {currentTable === "shelf" && (
            <Shelf scale-z={1.2} position-y={0.575} />
          )}
        </group>
      </Stage>
    </Suspense>
  );
};

export default Configurator;
