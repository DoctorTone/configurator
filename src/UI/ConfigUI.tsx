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
    <>
      <div id="autoRotate" className="panel">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={isRotating} onChange={toggleRotate} />}
            label="Auto-rotate"
          />
        </FormGroup>
      </div>
      <div id="pattern" className="panel">
        <FormGroup>
          <FormControl sx={{ mt: 3 }}>
            <FormLabel
              sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}
              id="demo-radio-buttons-group-label"
            >
              Pattern:
            </FormLabel>
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
              <FormControlLabel
                value="zebra"
                control={<Radio />}
                label="Zebra"
              />
              <FormControlLabel
                value="flowers"
                control={<Radio />}
                label="Flowers"
              />
              <FormControlLabel
                value="orange"
                control={<Radio />}
                label="Orange"
              />
              <FormControlLabel
                value="glass"
                control={<Radio />}
                label="Glass"
              />
            </RadioGroup>
          </FormControl>
        </FormGroup>
      </div>
      <div id="table" className="panel">
        <FormGroup>
          <FormControl sx={{ mt: 3 }}>
            <FormLabel
              sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}
              id="demo-radio-buttons-group-label"
            >
              Table:
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="round"
              name="radio-buttons-group"
              onChange={updatePattern}
            >
              <FormControlLabel
                value="round"
                control={<Radio />}
                label="Round"
              />
              <FormControlLabel
                value="glass"
                control={<Radio />}
                label="Glass"
              />
              <FormControlLabel value="wood" control={<Radio />} label="Wood" />
            </RadioGroup>
          </FormControl>
        </FormGroup>
      </div>
    </>
  );
};

export default ConfigUI;
