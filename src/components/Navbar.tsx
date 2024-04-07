"use client";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { CSSProperties } from "react";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

const Navbar = () => {
  const links = [
    { name: "Home", href: "/", color: "darkgreen" },
    { name: "Events", href: "#events", color: "blue" },
    { name: "Speakers", href: "#speakers", color: "purple" },
    { name: "Committee", href: "#committee", color: "orange" },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-black">
        <img
          src="/WiDS_logo_nav.png"
          alt="wids logo"
          className="w-44 lg:w-48"
        />
      </div>
      <div
        id="menu"
        className="w-full justify-center gap-5 hidden md:block flex-grow md:flex md:items-center md:w-auto md:ml-28"
      >
        {links.map((link) => (
          <a
            key={link.name}
            className={cn(
              `block mt-4 sm:inline-block sm:mt-0 text-black mr-4 ${styles.linkUnderline}`,
              font.className
            )}
            href={link.href}
            style={{ "--underline-color": link.color } as CSSProperties}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex items-center flex-shrink-0 text-black">
        <img
          src="/kletech-logo.png"
          alt="kletech logo"
          className="lg:w-[300px] w-[150px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
