import { Suspense } from "react";
import { Group } from "three";
import { SCENE } from "../state/Config";
import { Loading } from "../components/Loading";
import { Vase } from "../models/Vases";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundWoodTable } from "../models/RoundWoodTable";
import { RoundTable } from "../models/RoundTable";
import { ModernTable } from "../models/ModernTable";
import { Stage } from "@react-three/drei";
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
          {currentTable === "round" && <RoundTable />}
          {currentTable === "glass" && <ModernTable position-y={0.275} />}
          {currentTable === "wood" && <RoundWoodTable />}
        </group>
      </Stage>
    </Suspense>
  );
};

export default Configurator;
