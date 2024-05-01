import { create } from "zustand";

interface ConfiguratorState {
  isRotating: boolean;
  setRotating: (status: boolean) => void;
}

const useStore = create<ConfiguratorState>((set) => ({
  isRotating: true,
  setRotating: (status) => set((state) => ({ isRotating: status })),
}));

export default useStore;
