"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

const Footer = ({ locale }) => {
  const [dict, setDict] = useState(null);

  useEffect(() => {
    const loadLocale = async () => {
      const translations = await import(`@/dictionaries/${locale}.json`);
      setDict(translations);
    };

    loadLocale();
  }, [locale]);

  if (!dict) return null;
  return (
    <footer className="bg-gradient-to-br from-white to-red-100 text-gray-800 relative overflow-hidden border-t border-gray-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-32 h-32 bg-pink-800  rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute -top-30 right-0 w-35 h-35 bg-main-color  rounded-full translate-x-20 translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-main-color  rounded-full translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-pink-800 rounded-full"></div>
      </div>

      <div className="container mx-auto px-5 pt-10 pb-5 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col max-sm:items-center">
            <Link href="" className="block mb-4">
              <Image
                src="/images/FLOWTIC-LOGO.png"
                alt="Flowtic Logo"
                width={140}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-600">{dict.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 text-gray-800">
              {dict.footer.quick_links}
            </h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="#Why-Odoo"
                className="text-gray-600 hover:text-pink-800 transition-colors duration-300"
              >
                {dict.navigation.why_odoo}
              </Link>
              <Link
                href="#Why-Us"
                className="text-gray-600 hover:text-pink-800 transition-colors duration-300"
              >
                {dict.navigation.why_us}
              </Link>
              <Link
                href="#Our-Packages"
                className="text-gray-600 hover:text-pink-800 transition-colors duration-300"
              >
                {dict.navigation.our_packages}
              </Link>
              <Link
                href="#Our-Clients"
                className="text-gray-600 hover:text-pink-800 transition-colors duration-300"
              >
                {dict.navigation.our_clients}
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4 max-sm:text-center text-gray-800">
              {dict.footer.contact_us}
            </h4>

            {/* Contact Info */}
            <div className="flex flex-col space-y-3 mb-4">
              <a
                href="tel:+966547393967"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-main-color transition-colors duration-300"
              >
                <FaPhone size={14} />
                <span className="text-start" dir="ltr">
                  +966 54 739 3967
                </span>
              </a>
              <a
                href="tel:201040747475"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-main-color transition-colors duration-300"
              >
                <FaPhone size={14} />
                <span className="text-start" dir="ltr">
                  +20 104 074 7475
                </span>
              </a>

              <a
                href="mailto:info@flowtic.com"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-main-color transition-colors duration-300"
              >
                <FaEnvelope size={14} />
                <span className="text-start">info@flowtic.com</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex justify-center md:justify-start space-x-3 ">
              <a
                href="https://api.whatsapp.com/send?phone=966547393967"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 group"
              >
                <FaWhatsapp
                  size={16}
                  className="text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576341404327"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              >
                <FaFacebookF
                  size={16}
                  className="text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCnTybAZK7R9MtQCmNcskQXg"
                target="_blank"
                className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 group"
              >
                <FaYoutube
                  size={16}
                  className="text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/flowticerp/"
                target="_blank"
                className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300 group"
              >
                <FaLinkedinIn
                  size={16}
                  className="text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-center md:text-right">
              {dict.footer.rights}
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-pink-800 transition-colors duration-300"
              >
                {dict.footer.privacy_policy}
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-pink-800 transition-colors duration-300"
              >
                {dict.footer.terms_conditions}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
