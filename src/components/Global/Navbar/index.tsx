import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image
          src="/images/logo2.svg"
          alt="Name Logo"
          width={128}
          height={77}
          className="object-cover"
        />
      </Link>
      <ul>
        {navLinks.map((link) => (
          <li key={link?.id}>
            <Link href={`${link?.path}`}>{link?.name}</Link>
          </li>
        ))}
      </ul>
      <div></div>
    </nav>
  );
};

export default Navbar;
