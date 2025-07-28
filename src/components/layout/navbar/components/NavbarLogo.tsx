import Image from "next/image";
import Link from "next/link";
import React from "react";

import { logo } from "@/static";
import { useActiveStore } from "@/store/activeStore";

export default function NavbarLogo() {
  const { setActive } = useActiveStore();
  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <Image src={logo} alt="logo image" className="w-9 h-9 object-contain" />
        <p className="text-white text-[18px] font-bold cursor-pointer">
          Denis Homoki
        </p>
      </Link>
    </>
  );
}
