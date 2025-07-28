"use client";

import React from "react";

import { Html, useProgress } from "@react-three/drei";
import { styles } from "@/lib/constants";

const Loader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className={styles.loader}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loader;
