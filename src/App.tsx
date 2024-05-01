import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Configurator from "./components/Configurator";
import { SCENE } from "./state/Config";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <Configurator />
        <OrbitControls
          makeDefault
          enablePan={true}
          enableRotate={true}
          enableDamping={true}
        />
      </Canvas>
    </>
  );
}

export default App;
