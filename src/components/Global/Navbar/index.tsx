"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  const [isNavTop, setIsNavTop] = useState<boolean>(false);
  const [toggleMobileNav, setToggleMobileNav] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY === 0) {
        setIsNavTop(true);
      } else {
        setIsNavTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full bg-secondary fixed md:block hidden ${isNavTop ? "border-b" : ""}`}
      >
        <nav className="fr-container flex items-center justify-between py-2.5 gap-4">
          <Link href="/">
            <Image
              src="/images/logo2.svg"
              alt="Name Logo"
              width={128}
              height={77}
              className="object-cover w-[94px]"
            />
          </Link>
          <ul className="flex  items-center gap-9">
            {navLinks.map((link) => (
              <li key={link?.id}>
                <Link href={`${link?.path}`}>{link?.name}</Link>
              </li>
            ))}
          </ul>
          <div></div>
        </nav>
      </header>
      {/* Mobile Navbar */}
      <header
        className={`w-full bg-secondary fixed md:hidden block transition-all duration-500 ease-in ${isNavTop ? "border-b" : ""}`}
      >
        <nav className="flex justify-between items-center px-4 py-2.5 gap-4">
          <button
            className="text-2xl text-primary"
            onCut={() => setToggleMobileNav(true)}
          >
            <HiBars3BottomLeft />
          </button>
          <Link href="/">
            <Image
              src="/images/logo2.svg"
              alt="Name Logo"
              width={128}
              height={77}
              className="object-cover w-[74px]"
            />
          </Link>
          <div></div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
