import { Suspense } from "react";
import { Loading } from "../components/Loading";
import { Vase } from "../models/Vases";
import { Stage } from "@react-three/drei";

const Configurator = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Stage
        adjustCamera={1.3}
        intensity={0.5}
        shadows="contact"
        environment="city"
      >
        <Vase />
      </Stage>
    </Suspense>
  );
};

export default Configurator;
