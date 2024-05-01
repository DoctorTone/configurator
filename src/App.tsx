import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Scenes/Lights";
import Configurator from "./components/Configurator";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Lights />
        <Configurator />
        <OrbitControls enablePan={true} enableRotate={true} />
      </Canvas>
    </>
  );
}

export default App;
