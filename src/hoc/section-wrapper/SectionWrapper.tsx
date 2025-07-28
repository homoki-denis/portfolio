"use client";

import { motion } from "framer-motion";
import React from "react";
import { staggerContainer } from "@/lib/motion";
import { styles } from "@/lib/constants";

export default function SectionWrapper<T extends object>(
  Component: React.ComponentType<T>,
  idName: string
) {
  return function HOC(props: T) {
    return (
      <motion.section
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}></span>
        <Component {...props} />
      </motion.section>
    );
  };
}
