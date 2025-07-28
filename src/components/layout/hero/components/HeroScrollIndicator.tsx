"use client";
import { motion } from "framer-motion";
import React from "react";

export default function HeroScrollIndicator() {
  return (
    <a href="#about">
      <div className="w-[35px] h-[64px] border-4 border-secondary rounded-full flex justify-center items-start p-2">
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
      </div>
    </a>
  );
}
