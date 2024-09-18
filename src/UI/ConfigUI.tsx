import { useRef, useState, MouseEvent } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Switch from "@mui/material/Switch";
import useStore from "../state/store";

import { ChangeEvent } from "react";

const ConfigUI = () => {
  const dayRef = useRef(true);
  const setRotating = useStore((state) => state.setRotating);
  const isRotating = useStore((state) => state.isRotating);
  const setCurrentPattern = useStore((state) => state.setCurrentPattern);
  const setCurrentTable = useStore((state) => state.setCurrentTable);
  const switchDayMode = useStore((state) => state.switchDayMode);
  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const toggleRotate = () => {
    setRotating(!isRotating);
  };

  const toggleLights = () => {
    dayRef.current = !dayRef.current;
    switchDayMode(dayRef.current);
  };

  const updatePattern = (event: ChangeEvent<HTMLInputElement>) => {
    const pattern = event.target.value;
    setCurrentPattern(pattern);
  };

  const updateTable = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTable(event.target.value);
  };

  return (
    <>
      <div id="autoRotate" className="panel">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={isRotating} onChange={toggleRotate} />}
            label="Rotate"
          />
        </FormGroup>
      </div>

      <div id="pattern" className="panel">
        <h3>Pattern</h3>
        <ToggleButtonGroup
          orientation="vertical"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            className="roundedButton"
            sx={{ mb: 1 }}
            style={{ backgroundImage: `url(./textures/blot.jpg)` }}
            value="ink"
            aria-label="ink blot"
          ></ToggleButton>
          <ToggleButton
            className="roundedButton"
            sx={{ mb: 1 }}
            style={{ backgroundImage: `url(./textures/zebra.jpg)` }}
            value="zebra"
            aria-label="zebra"
          ></ToggleButton>
          <ToggleButton
            className="roundedButton"
            sx={{ mb: 1 }}
            style={{ backgroundImage: `url(./textures/flowersIcon.jpg)` }}
            value="flowers"
            aria-label="flowers"
          ></ToggleButton>
          <ToggleButton
            className="roundedButton"
            sx={{ mb: 1 }}
            style={{ backgroundImage: `url(./textures/orangeIcon.jpg)` }}
            value="orange"
            aria-label="orange"
          ></ToggleButton>
          <ToggleButton
            className="roundedButton"
            sx={{ mb: 1 }}
            style={{ backgroundImage: `url(./textures/glass.png)` }}
            value="glass"
            aria-label="glass"
          ></ToggleButton>
        </ToggleButtonGroup>
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
              onChange={updateTable}
            >
              <FormControlLabel
                value="round"
                control={<Radio />}
                label="Round"
              />
              <FormControlLabel
                value="stand"
                control={<Radio />}
                label="Stand"
              />
              <FormControlLabel
                value="shelf"
                control={<Radio />}
                label="Shelf"
              />
            </RadioGroup>
          </FormControl>
        </FormGroup>
      </div>
      <div id="lights" className="panel">
        <FormGroup>
          <FormLabel
            sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}
            id="demo-radio-buttons-group-label"
          >
            Lights:
          </FormLabel>
          <FormControlLabel
            control={
              <Switch
                // checked={showPaths}
                onChange={toggleLights}
                color="primary"
              />
            }
            label="Day/night"
          />
        </FormGroup>
      </div>
    </>
  );
};

export default ConfigUI;
