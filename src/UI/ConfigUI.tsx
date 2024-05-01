import Checkbox from "@mui/material/Checkbox";
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import useStore from "../state/store";
import { ChangeEvent } from "react";

const ConfigUI = () => {
  const setRotating = useStore((state) => state.setRotating);
  const isRotating = useStore((state) => state.isRotating);
  const setCurrentPattern = useStore((state) => state.setCurrentPattern);

  const toggleRotate = () => {
    setRotating(!isRotating);
  };

  const updatePattern = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPattern(event.target.value);
  };

  return (
    <div id="configUI" className="panel">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={isRotating} onChange={toggleRotate} />}
          label="Auto-rotate"
        />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Pattern</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="ink"
            name="radio-buttons-group"
            onChange={updatePattern}
          >
            <FormControlLabel
              value="ink"
              control={<Radio />}
              label="Ink blot"
            />
            <FormControlLabel value="zebra" control={<Radio />} label="Zebra" />
          </RadioGroup>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default ConfigUI;
