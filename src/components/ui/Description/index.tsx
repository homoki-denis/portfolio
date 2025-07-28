"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Description = {
  description: string;
  className?: string;
};

export default function Description({ description, className }: Description) {
  return (
    <motion.p
      variants={fadeIn("", undefined, 0.1, 1)}
      className={cn(
        "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",
        className
      )}
    >
      {description}
    </motion.p>
  );
}
