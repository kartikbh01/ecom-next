"use client";

import Link from "next/link";
import Label from "./label";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Docs", href: "/docs/anything1/anything2/anything3" },
  { name: "Docs2", href: "/docs2" },
];

function isLinkActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}`);
}

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="border-b border-dashed">
      <ul className="flex items-center px-8 py-4 gap-4">
        {links.map((link) => (
          <li
            key={link.href}
            className={
              isLinkActive(link.href, pathname)
                ? "text-blue-500 font-bold border-b"
                : ""
            }
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
        <Label text={" /layout.js (root layout)"} />
      </ul>
    </nav>
  );
}
