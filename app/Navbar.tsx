'use client'
import React from "react";
import Link from "next/link";
import { VscDebugStart } from "react-icons/vsc";

const Navbar = () => {
  const links = [
    {  nav: "Dashboard", href: "/" },
    {  nav: "Debug", href: "/debug" },
    {  nav: "Documentation", href: "/documentation" },

  ];

  return (
    <div>
      <nav className="flex space-x-6 border-b px-9 py-7 items-center">
        <Link href="/">
          <VscDebugStart />
        </Link>

        <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              className="text-zinc-500 hover:text-black transition-colors"
              href={link.href}
            >{link.nav}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
