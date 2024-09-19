import { useRef, useState, MouseEvent } from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel, FormLabel } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Stack from "@mui/material/Stack";
import useStore from "../state/store";

const ConfigUI = () => {
  const dayRef = useRef(true);
  const setRotating = useStore((state) => state.setRotating);
  const isRotating = useStore((state) => state.isRotating);
  const setCurrentPattern = useStore((state) => state.setCurrentPattern);
  const setCurrentTable = useStore((state) => state.setCurrentTable);
  const switchDayMode = useStore((state) => state.switchDayMode);

  const toggleRotate = () => {
    setRotating(!isRotating);
  };

  const toggleLights = () => {
    dayRef.current = !dayRef.current;
    switchDayMode(dayRef.current);
  };

  const updatePattern = (
    event: MouseEvent<HTMLElement>,
    newPattern: string
  ) => {
    setCurrentPattern(newPattern);
  };

  const updateTable = (event: MouseEvent<HTMLElement>, newTable: string) => {
    console.log("Table = ", newTable);
    setCurrentTable(newTable);
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

      <div id="title" className="panel">
        <FormLabel sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}>
          Vase Configurator
        </FormLabel>
      </div>

      <div id="pattern" className="panel">
        <ToggleButtonGroup
          orientation="vertical"
          exclusive
          onChange={updatePattern}
          aria-label="pattern change"
          id="patternChange"
          className="buttonGroup"
        >
          <div>
            <FormLabel className="buttonText">Ink blot</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={{ backgroundImage: `url(./textures/blot.jpg)` }}
              value="ink"
              aria-label="ink blot"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Zebra</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={{ backgroundImage: `url(./textures/zebra.jpg)` }}
              value="zebra"
              aria-label="zebra"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Flower</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={{ backgroundImage: `url(./textures/flowersIcon.jpg)` }}
              value="flowers"
              aria-label="flowers"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Orange</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={{ backgroundImage: `url(./textures/orangeIcon.jpg)` }}
              value="orange"
              aria-label="orange"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Glass</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={{ backgroundImage: `url(./textures/glass.png)` }}
              value="glass"
              aria-label="glass"
            ></ToggleButton>
          </div>
        </ToggleButtonGroup>
      </div>
      <div id="table" className="panel">
        <ToggleButtonGroup
          sx={{ ml: 1 }}
          orientation="vertical"
          exclusive
          onChange={updateTable}
          aria-label="table change"
          id="tableChange"
          className="buttonGroup"
        >
          <div>
            <FormLabel className="buttonText">Round</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={{
                backgroundImage: `url(./textures/round.png)`,
                backgroundPosition: "center",
              }}
              value="round"
              aria-label="round table"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Stand</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={{
                backgroundImage: `url(./textures/stand.png)`,
                backgroundPosition: "center",
              }}
              value="stand"
              aria-label="stand"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Shelf</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={{ backgroundImage: `url(./textures/shelf.png)` }}
              value="shelf"
              aria-label="shelf"
            ></ToggleButton>
          </div>
        </ToggleButtonGroup>
      </div>
      <div id="lights" className="panel">
        <FormLabel
          sx={{ ml: 1, fontWeight: "bold", fontSize: "h6.fontSize" }}
          id="demo-radio-buttons-group-label"
        >
          Lighting
        </FormLabel>
        <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
          <LightModeIcon color="action" />
          <Switch onChange={toggleLights} color="primary" />
          <DarkModeIcon />
        </Stack>
      </div>
    </>
  );
};

export default ConfigUI;
