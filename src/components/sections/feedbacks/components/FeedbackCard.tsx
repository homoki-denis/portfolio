import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "@/lib/motion";
import { StaticImageData } from "next/image";

type FeedbackCardProps = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: StaticImageData;
};

export default function FeedbackCard({
  testimonial,
  name,
  designation,
  company,
  image,
}: FeedbackCardProps) {
  return (
    <motion.div
      variants={fadeIn("", "spring", 0.2, 0.75)}
      className="bg-gray-950 p-10 rounded-3xl md:w-[307px] w-full"
    >
      <p className="text-white text-[60px] font-bold">"</p>
      <div>
        <p className="tracking-wider text-[18px] line-clamp-7">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image.src}
            alt={`feedback by ${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
