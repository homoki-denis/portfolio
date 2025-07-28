"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "@/lib/constants";
import { SectionWrapper } from "@/hoc";
import { ExperienceCard } from "./components";
import { Heading } from "@/components/ui";

const Experience: React.FC = () => {
  return (
    <>
      <Heading subText="What I have done so far" mainText="Work experience" />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
