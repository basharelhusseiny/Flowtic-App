import FAQSection from "@/components/home/FAQSection";
import FreeContactSection from "@/components/home/FreeContactSection";
import HeroSection from "@/components/home/HeroSection";
import OdooInfoSection from "@/components/home/OdooInfoSection";
import Packages from "@/components/home/Packages";
import PartnerSection from "@/components/home/PartnerSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import WhyOdooSection from "@/components/home/WhyOdooSection";
import { getDictionary } from "@/dictionaries";

const Home = async ({ params }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <HeroSection dict={dict} locale={locale} />
      <OdooInfoSection dict={dict} />
      <WhyOdooSection dict={dict} />
      <StatisticsSection dict={dict} />
      <Packages dict={dict} />
      <PartnerSection dict={dict} />
      <FAQSection dict={dict} />
      <FreeContactSection dict={dict} locale={locale} />
    </main>
  );
};

export default Home;
