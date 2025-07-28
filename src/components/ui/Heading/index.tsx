import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/lib/constants";
import { textVariant } from "@/lib/motion";

type HeadingProps = {
  subText: string;
  mainText: string;
  delay?: number;
  className?: string;
};

export default function Heading({
  subText,
  mainText,
  className,
  delay = 0.1,
}: HeadingProps) {
  return (
    <motion.div variants={textVariant(delay)} className={className}>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{mainText}</h2>
    </motion.div>
  );
}
