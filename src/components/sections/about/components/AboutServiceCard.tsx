import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

type AboutServiceCardProps = {
  index: number;
  title: string;
  icon: StaticImageData;
};

export default function AboutServiceCard({
  index,
  title,
  icon,
}: AboutServiceCardProps) {
  return (
    <Tilt className="sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon.src} alt={title} className="w-16 h-16" />
          <h3 className="text-center text-white text-[20px] font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
