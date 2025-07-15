"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ navLinks, locale }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="hidden lg:flex items-center justify-between gap-7 font-bold capitalize">
        {navLinks.map((link) => {
          const fullHref = `/${locale}${link.href}`;

          const isActive =
            pathname === fullHref ||
            (link.href === "/" && pathname === `/${locale}`);

          return (
            <li key={link.id}>
              <Link
                href={fullHref}
                className={`${
                  isActive ? "text-main-color" : "text-black"
                } text-[18px] hover:text-main-color duration-300`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
