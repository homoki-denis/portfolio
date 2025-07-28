import { StaticImageData } from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";

type ExperienceCardProps = {
  experience: {
    title: string;
    company_name: string;
    icon: StaticImageData;
    iconBg: string;
    date: string;
    points: string[];
  };
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1D1836",
        color: "#FFF",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div>
          <img
            src={experience.icon.src}
            alt={experience.company_name}
            className="rounded-full object-cover"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}
