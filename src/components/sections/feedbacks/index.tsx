"use client";
import React from "react";

import { styles } from "@/lib/constants";
import { SectionWrapper } from "@/hoc";
import { testimonials } from "@/lib/constants";
import { Heading } from "@/components/ui";
import { FeedbackCard } from "./components";

const Feedbacks: React.FC = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <Heading subText="What others say" mainText="Testimonials" />
        <div className={`mt-20 pb-14 flex flex-wrap xl:justify-between gap-7`}>
          {testimonials.map((testimonial, index) => (
            <a
              href="https://www.linkedin.com/in/denis-homoki/#recommendations/"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FeedbackCard key={index} {...testimonial} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
