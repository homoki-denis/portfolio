import { create } from "zustand";

type isMobileStore = {
  isMobile: boolean;
  setIsMobile: (toggleMobile: boolean) => void;
};

export const useIsMobileStore = create<isMobileStore>((set) => ({
  isMobile: false,
  setIsMobile: (toggleMobile) => {
    set({ isMobile: toggleMobile });
  },
}));
