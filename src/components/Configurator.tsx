import { Suspense, useRef, useEffect } from "react";
import { Group, SpotLight } from "three";
import { SCENE } from "../state/Config";
import { Loading } from "../components/Loading";
import { Vase } from "../models/Vases";
import { useFrame } from "@react-three/fiber";
import { Shelf } from "../models/Shelf";
import { RoundTable } from "../models/RoundTable";
import { Stand } from "../models/Stand";
import { useThree } from "@react-three/fiber";
import { Stage, Shadow } from "@react-three/drei";
import { getCameraAdjust } from "../utils/Utils";
import useStore from "../state/store";

const Configurator = () => {
  const isRotating = useStore((state) => state.isRotating);
  const currentTable = useStore((state) => state.currentTable);
  const dayMode = useStore((state) => state.dayMode);
  const groupRef = useRef<Group>(null);
  const { scene } = useThree();

  useFrame((_, delta) => {
    if (isRotating) {
      groupRef.current!.rotation.y += delta * SCENE.ROTATION_SPEED;
    }
  });

  useEffect(() => {
    if (scene.children.length) {
      scene.children.forEach((child) => {
        switch (child.type) {
          case "PointLight":
            child.visible = dayMode ? true : false;
            scene.environmentIntensity = dayMode
              ? SCENE.DAY_ENV_INTENSITY
              : SCENE.NIGHT_ENV_INTENSITY;
            break;

          case "AmbientLight":
            child.visible = dayMode ? true : false;
            break;

          case "SpotLight": {
            const spotlight = child as SpotLight;
            spotlight.intensity = dayMode
              ? SCENE.DAY_SPOT_INTENSITY
              : SCENE.NIGHT_SPOT_INTENSITY;
            spotlight.angle = dayMode
              ? SCENE.DAY_SPOT_ANGLE
              : SCENE.NIGHT_SPOT_ANGLE;
            break;
          }

          default:
            break;
        }
      });
    }
  }, [dayMode]);

  return (
    <Suspense fallback={<Loading />}>
      <Stage
        adjustCamera={getCameraAdjust()}
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
