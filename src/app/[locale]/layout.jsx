import { Cairo, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileMenuProvider from "@/context/MobileMenuContext";
import FixedButtons from "@/ui/FixedButtons";

const roboto = Roboto({ subsets: ["latin"], display: "swap" });
const cairo = Cairo({ subsets: ["arabic"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://flowtic.co/"), // ← عدّل للدومين الحقيقي
  title: {
    default:
      "Flowtic | Official Odoo Partner | Odoo ERP Implementation Experts",
  },
  description:
    "As an official Odoo Partner, Flowtic delivers tailored ERP implementation, training, and cloud support across MENA. Our team helps you automate, customize, and grow with Odoo ERP for industries like construction, retail, services, and manufacturing.",
  keywords: [
    "Flowtic",
    "Odoo ERP",
    "ERP MENA",
    "Odoo Partner",
    "ERP implementation",
    "Odoo customization",
    "Odoo support",
    "Cloud ERP",
    "Retail ERP",
    "Construction ERP",
    "Manufacturing ERP",
  ],
  openGraph: {
    title: "Flowtic | Official Odoo Partner | Odoo ERP Implementation Experts",
    description:
      "As an official Odoo Partner, Flowtic delivers tailored ERP implementation, training, and cloud support across MENA. Our team helps you automate, customize, and grow with Odoo ERP for industries like construction, retail, services, and manufacturing.",
    url: "https://flowtic.co/",
    siteName: "Flowtic",
    images: [
      {
        url: "https://flowtic.co/FLOWTIC-LOGO.png",
        width: 1200,
        height: 630,
        alt: "Flowtic - Odoo ERP Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowtic | Official Odoo Partner",
    description:
      "Odoo ERP implementation, customization & training in the MENA region.",
    images: ["https://flowtic.co/FLOWTIC-LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://flowtic.co/",
    languages: {
      en: "https://flowtic.co/en",
      ar: "https://flowtic.co/ar",
    },
  },
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
          <main className="flex-grow mt-[72px] overflow-hidden">
            {children}
          </main>
          <Footer locale={locale} />
          <FixedButtons />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
