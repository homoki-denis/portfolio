import { create } from "zustand";

type ToggleStore = {
  toggle: boolean;
  setToggle: (toggleValue: boolean) => void;
};

export const useToggleStore = create<ToggleStore>((set) => ({
  toggle: false,
  setToggle: (toggleValue) => {
    set({ toggle: toggleValue });
  },
}));
