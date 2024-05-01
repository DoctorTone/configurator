import { Vase } from "../models/Vases";
import { Stage } from "@react-three/drei";

const Configurator = () => {
  return (
    <Stage
      adjustCamera={1.5}
      intensity={0.5}
      shadows="contact"
      environment="city"
    >
      <Vase />;
    </Stage>
  );
};

export default Configurator;
