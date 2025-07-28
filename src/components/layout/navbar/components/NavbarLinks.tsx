import React from "react";
import { navLinks } from "@/lib/constants";
import { useActiveStore } from "@/store/activeStore";
import { useToggleStore } from "@/store/toggleStore";

type NavbarLinksProps = {
  type: "desktop" | "mobile";
};

export default function NavbarLinks({ type }: NavbarLinksProps) {
  const { active, setActive } = useActiveStore();
  const { toggle, setToggle } = useToggleStore();
  return (
    <>
      {type === "desktop" ? (
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="list-none flex sm:flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-poppins font-medium cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
