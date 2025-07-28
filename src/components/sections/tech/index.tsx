"use client";
import BallCanvas from "@/components/canvas/ball";
import { SectionWrapper } from "@/hoc";
import { technologies } from "@/lib/constants";

import React from "react";
import { Heading } from "@/components/ui";

const Tech: React.FC = () => {
  return (
    <>
      <Heading subText="What do i know" mainText="Technologies" />

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
