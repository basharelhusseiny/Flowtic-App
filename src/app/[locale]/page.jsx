import HeroSection from "@/components/home/HeroSection";
import OdooInfoSection from "@/components/home/OdooInfoSection";
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
    </main>
  );
};

export default Home;
