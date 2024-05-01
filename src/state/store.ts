import { create } from "zustand";

interface ConfiguratorState {
  isRotating: boolean;
  setRotating: (status: boolean) => void;
  currentPattern: string;
  setCurrentPattern: (pattern: string) => void;
}

const useStore = create<ConfiguratorState>((set) => ({
  isRotating: true,
  setRotating: (status) => set(() => ({ isRotating: status })),
  currentPattern: "ink",
  setCurrentPattern: (name) => set(() => ({ currentPattern: name })),
}));

export default useStore;
