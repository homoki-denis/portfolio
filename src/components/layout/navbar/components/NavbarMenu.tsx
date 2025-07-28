import Image from "next/image";
import React from "react";

import { menu, close } from "@/static";
import { useToggleStore } from "@/store/toggleStore";

export default function NavbarMenu() {
  const { toggle, setToggle } = useToggleStore();
  return (
    <>
      <Image
        src={toggle ? close : menu}
        alt="menu icon"
        className="w-[28px] h-[28px] object-contain cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      />
    </>
  );
}
