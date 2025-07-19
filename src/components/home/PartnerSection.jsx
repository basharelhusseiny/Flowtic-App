import HeaderSection from "@/ui/HeaderSection";
import RollingGallery from "./RollingGallery";

const PartnerSection = ({ dict }) => {
  return (
    <section id="Our-Clients" className="scroll-mt-[72px] py-10">
      <div className="container mx-auto px-5">
        <HeaderSection
          title={dict.partner.title}
          description={dict.partner.description}
        />
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
};

export default PartnerSection;
