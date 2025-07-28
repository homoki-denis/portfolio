"use client";
import React from "react";

import { styles } from "@/lib/constants";
import { ComputerCanvas } from "@/components/canvas";
import { HeroAccent, HeroHeading, HeroScrollIndicator } from "./components";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <HeroAccent />
        <HeroHeading />
      </div>

      <ComputerCanvas />

      <div className="absolute bottom-0 w-full flex justify-center items-center z-50">
        <HeroScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
