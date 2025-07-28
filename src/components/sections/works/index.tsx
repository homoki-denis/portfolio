"use client";

import React from "react";

import { projects } from "@/lib/constants";
import { SectionWrapper } from "@/hoc";
import { ProjectCard } from "./components";
import { Description, Heading } from "@/components/ui";

const Works: React.FC = () => {
  return (
    <>
      <Heading subText="My work" mainText="Projects" />

      <div className="w-full flex">
        <Description description="This collection highlights my hands-on experience tackling real-world challenges across diverse technologies. Each project represents a unique problem I’ve solved, demonstrating my technical versatility, analytical approach, and commitment to delivering functional solutions. You’ll find detailed case studies with direct links to live implementations and source code repositories, providing tangible proof of my development process from concept to execution. These examples reflect my ability to adapt to different tech stacks, optimize performance, and collaborate effectively to bring ideas to life." />
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
