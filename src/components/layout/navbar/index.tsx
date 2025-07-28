"use client";

import React from "react";

import { useToggleStore } from "@/store/toggleStore";

import { styles } from "@/lib/constants";
import { NavbarLinks, NavbarLogo, NavbarMenu } from "./components";

export default function Navbar() {
  const { toggle } = useToggleStore();

  return (
    <nav className={` ${styles.paddingX} w-full flex items-center z-20 py-5`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <NavbarLogo />

        <NavbarLinks type="desktop" />

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <NavbarMenu />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}
          >
            <NavbarLinks type="mobile" />
          </div>
        </div>
      </div>
    </nav>
  );
}
