import { Cairo, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileMenuProvider from "@/context/MobileMenuContext";
import FixedButtons from "@/ui/FixedButtons";

const roboto = Roboto({ subsets: ["latin"], display: "swap" });
const cairo = Cairo({ subsets: ["arabic"], display: "swap" });

export const metadata = {
  title: "Flowtic | Official Odoo Partner | Odoo ERP Implementation Experts",
  description:
    "As an official Odoo Partner, Flowtic delivers tailored ERP implementation, training, and cloud support across MENA. Our team helps you automate, customize, and grow with Odoo ERP for industries like construction, retail, services, and manufacturing.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${
          locale === "ar" ? cairo.className : roboto.className
        } antialiased min-h-screen flex flex-col`}
      >
        <MobileMenuProvider>
          <Header locale={locale} />
          <main className="flex-grow mt-[72px]">{children}</main>
          <Footer locale={locale} />
          <FixedButtons />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
