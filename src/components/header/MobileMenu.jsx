"use client";
import { useMobileMenu } from "@/context/MobileMenuContext";
import Link from "next/link";
import { useEffect, useRef } from "react";

const MobileMenu = ({ navLinks, locale }) => {
  const { isMobMenuOpen, setIsMobMenuOpen } = useMobileMenu();
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const menuItems = menuRef.current.querySelectorAll(".menu-item");
    const bookButton = menuRef.current.querySelector(".book-button");
    const backdrop = document.querySelector(".menu-backdrop");
    const menu = document.querySelector(".mobile-menu");

    if (isMobMenuOpen) {
      backdrop?.classList.add("open");
      menu?.classList.add("open");

      setTimeout(() => {
        menuItems.forEach((item) => item.classList.add("visible"));
        bookButton?.classList.add("visible");
      }, 100);
    } else {
      backdrop?.classList.remove("open");
      menu?.classList.remove("open");
      menuItems.forEach((item) => item.classList.remove("visible"));
      bookButton?.classList.remove("visible");
    }
  }, [isMobMenuOpen]);

  return (
    <div ref={menuRef}>
      <div
        className={`menu-backdrop fixed z-[49] right-0 top-[72px] bg-black/60 w-full h-[100dvh] duration-500 transition-all ${
          isMobMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobMenuOpen(false)}
      />

      <div
        className={`mobile-menu fixed z-[50] right-0 top-[58px] h-[100dvh] bg-gradient-to-b to-red-100 from-white w-[280px] shadow-xl duration-500 transition-transform ${
          isMobMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex flex-col items-center mt-20 space-y-5">
            {navLinks.map((link) => (
              <div key={link.id} className="menu-item">
                <Link
                  href={link.href}
                  scroll={true}
                  onClick={() => setIsMobMenuOpen(false)}
                  className="flex items-center text-main-color hover:text-white capitalize font-semibold text-lg py-2 px-4 rounded-lg hover:bg-[#a05b6a] transition-all duration-300"
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
