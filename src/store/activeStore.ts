import { create } from "zustand";

type ActiveStore = {
  active: string;
  setActive: (selectedSection: string) => void;
};

export const useActiveStore = create<ActiveStore>((set) => ({
  active: "",
  setActive: (selectedSection) => {
    set({ active: selectedSection });
  },
}));
