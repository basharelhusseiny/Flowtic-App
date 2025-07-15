import { Cairo, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileMenuProvider from "@/context/MobileMenuContext";
import FixedButtons from "@/ui/FixedButtons";

const roboto = Roboto({ subsets: ["latin"], display: "swap" });
const cairo = Cairo({ subsets: ["arabic"], display: "swap" });

export const metadata = {
  title: "Flowtic",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eos asperiores nulla, blanditiis consequuntur corrupti nemo ea quae eaque sequi in soluta voluptatum harum animi! Necessitatibus doloremque animi repellat ducimus.",
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
