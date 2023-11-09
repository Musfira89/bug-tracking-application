'use client'
import React from "react";
import Link from "next/link";
import { VscDebugStart } from "react-icons/vsc";
import { usePathname } from "next/navigation";
import classnames from "classnames"

const Navbar = () => {
      const currentPath =  usePathname();
      // console.log(currentPath);

  const links = [
    {  nav: "Dashboard", href: "/" },
    {  nav: "Bug", href: "/bug" },
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
              className={classnames({
                'text-black': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true
              })}
              href={link.href}
            >
              {link.nav}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
  
};

export default Navbar;
