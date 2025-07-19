"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = ({ navLinks }) => {
  const [activeId, setActiveId] = useState("");

  // optional: detect scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveId(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav>
      <ul className="hidden lg:flex items-center justify-between gap-7 font-bold capitalize">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              scroll={true}
              className={`${
                activeId === link.href ? "text-main-color" : "text-black"
              } text-[18px] hover:text-main-color duration-300`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
