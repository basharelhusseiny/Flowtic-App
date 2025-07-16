import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = ({ locale }) => {
  return (
    <footer className="bg-gradient-to-br from-white to-gray-50 text-gray-800 relative overflow-hidden border-t border-gray-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-main-color rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-main-color rounded-full translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-main-color rounded-full"></div>
      </div>

      <div className="container mx-auto px-5 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-right">
            <Link href={`/${locale || "ar"}`} className="inline-block mb-4">
              <Image
                src="/images/FLOWTIC-LOGO.png"
                alt="Flowtic Logo"
                width={140}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              شريكك المثالي في رحلة التحول الرقمي مع حلول Odoo ERP المتطورة
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 text-gray-800">
              روابط سريعة
            </h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="#Why-Odoo"
                className="text-gray-600 hover:text-main-color transition-colors duration-300 text-sm"
              >
                لماذا أودو؟
              </Link>
              <Link
                href="#Why-Us"
                className="text-gray-600 hover:text-main-color transition-colors duration-300 text-sm"
              >
                لماذا نحن؟
              </Link>
              <Link
                href="#Our-Packages"
                className="text-gray-600 hover:text-main-color transition-colors duration-300 text-sm"
              >
                باقاتنا
              </Link>
              <Link
                href="#Our-Clients"
                className="text-gray-600 hover:text-main-color transition-colors duration-300 text-sm"
              >
                عملاؤنا
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-gray-800">تواصل معنا</h4>

            {/* Contact Info */}
            <div className="flex flex-col space-y-3 mb-4">
              <a
                href="tel:+966547393967"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-main-color transition-colors duration-300 text-sm"
              >
                <FaPhone size={14} />
                <span>+966 54 739 3967</span>
              </a>
              <a
                href="tel:201040747475"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-main-color transition-colors duration-300 text-sm"
              >
                <FaPhone size={14} />
                <span>+20 104 074 7475</span>
              </a>
              <a
                href="mailto:info@flowtic.com"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-main-color transition-colors duration-300 text-sm"
              >
                <FaEnvelope size={14} />
                <span>info@flowtic.com</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex justify-center md:justify-start space-x-3 rtl:space-x-reverse">
              <a
                href="https://api.whatsapp.com/send?phone=966547393967"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 group"
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
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              >
                <FaFacebookF
                  size={16}
                  className="text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300 group"
              >
                <FaTwitter
                  size={16}
                  className="text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300 group"
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
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-right">
              © 2024 Flowtic. جميع الحقوق محفوظة
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse text-sm">
              <Link
                href="#"
                className="text-gray-500 hover:text-main-color transition-colors duration-300"
              >
                سياسة الخصوصية
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-main-color transition-colors duration-300"
              >
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
