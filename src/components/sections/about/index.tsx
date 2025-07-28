"use client";

import React from "react";

import { services } from "@/lib/constants";

import { AboutServiceCard } from "./components";
import { SectionWrapper } from "@/hoc";
import { Description, Heading } from "@/components/ui";

const About: React.FC = () => {
  return (
    <>
      <Heading
        subText="Introduction"
        mainText="Overview"
        className="mt-16 md:mt-0"
      />

      <Description description="As a software developer with extensive expertise in modern JavaScript ecosystems, I specialize in crafting immersive, high-performance digital experiences across the entire development stack. My mastery of TypeScript brings robust type safety to complex applications, while my deep knowledge of React and Vue frameworks - including their advanced implementations in Next.js and Nuxt.js - allows me to build sophisticated, SEO-friendly user interfaces with server-side rendering capabilities. On the backend, I architect scalable, efficient systems using Node.js, designing RESTful APIs and real-time services. My creative edge comes from advanced 3D visualization skills with Three.js and professional-grade animation capabilities using GSAP, enabling me to create breathtaking interactive experiences that captivate users and drive engagement." />

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <AboutServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
