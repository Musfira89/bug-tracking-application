import React from "react";
import Link from "next/link";
import { VscDebugStart } from "react-icons/vsc";

const Navbar = () => {
  const links = [
    { id: 1 , nav: "Dashboard", href: "/" },
    { id: 2 , nav: "Issues", href: "/issues" },
    { id: 3 , nav: "Documentation", href: "/doc" },

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
              key={link.id}
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
