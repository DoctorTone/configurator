import { Suspense } from "react";
import { Group } from "three";
import { SCENE } from "../state/Config";
import { Loading } from "../components/Loading";
import { Vase } from "../models/Vases";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Table } from "../models/Table";
import { Backdrop } from "@react-three/drei";
import { GlassTable } from "../models/GlassTable";
import { RoundWoodTable } from "../models/RoundWoodTable";
import { RoundTable } from "../models/RoundTable";
import { ModernTable } from "../models/ModernTable";
import { Stage } from "@react-three/drei";
import useStore from "../state/store";

const Configurator = () => {
  const isRotating = useStore((state) => state.isRotating);
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (isRotating) {
      groupRef.current!.rotation.y += delta * SCENE.ROTATION_SPEED;
    }
  });

  return (
    <Suspense fallback={<Loading />}>
      <Stage adjustCamera={1} intensity={0.5} environment="city">
        <group ref={groupRef}>
          <Vase scale={0.5} position={[0, 1, 0]} />
          <RoundTable />
        </group>
      </Stage>
    </Suspense>
  );
};

export default Configurator;
