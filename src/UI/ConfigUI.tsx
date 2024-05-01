import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import useStore from "../state/store";

const ConfigUI = () => {
  const setRotating = useStore((state) => state.setRotating);
  const isRotating = useStore((state) => state.isRotating);

  const toggleRotate = () => {
    setRotating(!isRotating);
  };

  return (
    <div id="configUI" className="panel">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={isRotating} onChange={toggleRotate} />}
          label="Auto-rotate"
        />
      </FormGroup>
    </div>
  );
};

export default ConfigUI;
