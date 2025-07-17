"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeaderSection from "@/ui/HeaderSection";
import {
  FaCheck,
  FaUsers,
  FaCrown,
  FaStar,
  FaArrowLeft,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";

const Packages = ({ dict }) => {
  const packagesData = dict.Packages.packages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    description: pkg.description,
    modules: pkg.modules,
    usersLimit: pkg.usersLimit,
    services: pkg.services,
    price: pkg.price,
    isPopular: pkg.isPopular || false,
    gradient: "from-pink-50 to-pink-200",
    accentColor: "pink-800",
  }));

  const PackageCard = ({ pkg }) => (
    <div
      className={`relative flex flex-col justify-between bg-gradient-to-br ${
        pkg.gradient
      } rounded-3xl p-6 ${pkg.isPopular ? "ring-4 ring-pink-500/30" : ""}`}
    >
      {/* Popular Badge */}
      {pkg.isPopular && (
        <div className="absolute -top-5 right-6 bg-gradient-to-r from-[#cb9ea7] to-pink-800 text-white px-5 py-2 rounded-full shadow-lg transform -translate-y-1">
          <div className="flex items-center gap-2">
            <FaCrown size={18} />
            <span className="font-bold">{dict.Packages.popular_badge}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-3">
        <div
          className={`w-14 h-14 bg-gradient-to-r from-[#cb9ea7] to-pink-800 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg`}
        >
          <FaStar className="text-white" size={26} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
        <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-4">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-xl">
          <div className="text-2xl font-bold text-pink-800 mb-2">
            {pkg.price}
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-800">
            <FaUsers size={20} className="text-pink-800" />
            <span>{pkg.usersLimit}</span>
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-pink-800 rounded-full"></div>
          {dict.Packages.modules_title}
        </h4>
        <div className="space-y-3">
          {pkg.modules.map((module, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg px-3 py-1 transition-all duration-300 hover:bg-white/80"
            >
              <FaCheck className="text-green-500 flex-shrink-0" size={16} />
              <span className="text-gray-800 font-medium">{module}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mb-5">
        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-pink-800 rounded-full"></div>
          {dict.Packages.services_title}
        </h4>
        <div className="space-y-2">
          {pkg.services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-lg px-3 py-1 transition-all duration-300 hover:bg-white/80"
            >
              <FaCheck
                className="text-green-500 flex-shrink-0 mt-1"
                size={14}
              />
              <span className="text-gray-800 leading-relaxed">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-4">
        <Link
          href="#contact"
          className="flex justify-center items-center h-[50px] bg-gradient-to-r from-[#cb9ea7] to-pink-800 text-white px-8 rounded-full font-semibold text-lg hover:from-pink-800 hover:to-[#cb9ea7] transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          {dict.Packages.choose_package}
        </Link>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Link
            href={`https://api.whatsapp.com/send?phone=966547393967&text=${encodeURIComponent(
              `${"اريد الاستفسار عن "} ${pkg.name}`
            )}`}
            target="_blank"
            className="flex justify-center items-center h-[50px] bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-500 transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:flex-1"
          >
            <FaWhatsapp size={18} className="mx-2" />
            {dict.Packages.whatsapp}
          </Link>

          <Link
            href="tel:201040747475"
            className="flex justify-center items-center h-[50px] bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-full font-semibold text-lg hover:from-sky-700 hover:to-sky-500 transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:flex-1"
          >
            <FaPhone size={18} className="mx-2" />
            {dict.Packages.call}
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="pb-12 relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10">
        <HeaderSection
          title={dict.Packages.title}
          description={dict.Packages.description}
        />

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {packagesData.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile Swiper */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 2,
              },
            }}
            className="odoo-swiper"
          >
            {packagesData.map((pkg, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                  <PackageCard pkg={pkg} index={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Packages;
