import { styles } from "@/lib/constants";
import React from "react";

export default function HeroHeading() {
  return (
    <div>
      <h1 className={`${styles.heroHeadText}`}>
        Hey, I'm <span className="text-[#915eff]">Denis</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        Code • Cloud • 3D • UI <br className="block" />
        Turning ideas into high-performance <br className="sm:block hidden" />
        digital experiences.
      </p>
    </div>
  );
}
