import { create } from "zustand";

interface ConfiguratorState {
  isRotating: boolean;
  setRotating: (status: boolean) => void;
  currentPattern: string;
  setCurrentPattern: (pattern: string) => void;
  currentTable: string;
  setCurrentTable: (name: string) => void;
  dayNightSwitch: boolean;
  setSwitchRequired: (status: boolean) => void;
}

const useStore = create<ConfiguratorState>((set) => ({
  isRotating: true,
  setRotating: (status) => set(() => ({ isRotating: status })),
  currentPattern: "ink",
  setCurrentPattern: (name) => set(() => ({ currentPattern: name })),
  currentTable: "round",
  setCurrentTable: (name) => set(() => ({ currentTable: name })),
  dayNightSwitch: false,
  setSwitchRequired: (status: boolean) => set({ dayNightSwitch: status }),
}));

export default useStore;
