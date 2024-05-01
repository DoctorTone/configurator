import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import Lights from "./Scenes/Lights";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Lights />
        <Box>
          <meshStandardMaterial color={"hotpink"} />
        </Box>
        <OrbitControls enablePan={true} enableRotate={true} />
      </Canvas>
    </>
  );
}

export default App;
