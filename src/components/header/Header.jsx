import Link from "next/link";
import Navbar from "./Navbar";
import UserActions from "./UserActions";
import { getDictionary } from "@/dictionaries";
import MobileMenuToggle from "./MobileMenuToggle";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default async function Header({ locale }) {
  const { navigation } = await getDictionary(locale);

  const navLinks = [
    { id: 1, title: navigation.why_odoo, href: "#Why-Odoo" },
    { id: 2, title: navigation.why_us, href: "#Why-Us" },
    { id: 3, title: navigation.our_packages, href: "#Our-Packages" },
    { id: 4, title: navigation.our_clients, href: "#Our-Clients" },
    { id: 5, title: navigation.free_consultation, href: "#Free-Consultation" },
  ];

  return (
    <header className="fixed flex items-center z-50 left-0 top-0 w-full bg-white shadow-lg h-[72px] text-lg">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link href={`/${locale}`} className="inline-block">
          <Image
            src="/images/FLOWTIC-LOGO.png"
            alt="H Brothers Logo"
            width={160}
            height={70}
            className="object-contain"
          />
        </Link>

        <Navbar navLinks={navLinks} locale={locale} />
        <div className="flex lg:hidden">
          <MobileMenu navLinks={navLinks} locale={locale} />
        </div>

        <div className="flex justify-between items-center gap-3">
          <UserActions locale={locale} />
          <div className="block lg:hidden">
            <MobileMenuToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
