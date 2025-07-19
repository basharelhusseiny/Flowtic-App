"use client";
import { odooData } from "@/data/OdooData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeaderSection from "@/ui/HeaderSection";

const OdooInfoSection = ({ dict }) => {
  return (
    <section className="py-10 px-4 bg-gradient-to-bl from-gray-50 via-white to-red-100 relative overflow-hidden">
      <div className="container mx-auto px-5">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-red-100 to-purple-100 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-pink-100 to-orange-100 rounded-full opacity-20 blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <HeaderSection
            title={dict.odooHeader.title}
            description={dict.odooHeader.description}
          />

          {/* Enhanced Image Container */}
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/images/odoo.webp"
              alt="Odoo Platform Interface"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {odooData.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-pink-800 transition-colors">
                      {dict[category.titleKey.split(".")[0]].title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={
                              dict[item.nameKey.split(".")[0]][
                                item.nameKey.split(".")[1]
                              ]
                            }
                            width={30}
                            height={20}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[17px] text-gray-700 font-medium">
                          {
                            dict[item.nameKey.split(".")[0]][
                              item.nameKey.split(".")[1]
                            ]
                          }
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Swiper */}
          <div className="block md:hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1.2}
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
              {odooData.map((category, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold text-gray-800">
                        {dict[category.titleKey.split(".")[0]].title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex justify-start items-center gap-3 p-2 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={
                                dict[item.nameKey.split(".")[0]][
                                  item.nameKey.split(".")[1]
                                ]
                              }
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {
                              dict[item.nameKey.split(".")[0]][
                                item.nameKey.split(".")[1]
                              ]
                            }
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="text-center mt-10 bg-gradient-to-r from-white to-pink-100 py-3 px-10 rounded-2xl shadow-lg border border-pink-100 w-fit mx-auto hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <p className="text-xl font-bold text-gray-700">
                {dict.pricingSection.line1}
              </p>
              <div className="flex items-center">
                <span className="text-2xl text-pink-800 font-extrabold bg-white px-4 py-1 rounded-lg shadow-sm">
                  {dict.pricingSection.price}
                </span>
              </div>
              <p className="text-lg text-gray-700 font-medium">
                {dict.pricingSection.line2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OdooInfoSection;
