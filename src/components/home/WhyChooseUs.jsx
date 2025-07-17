"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaFileInvoiceDollar,
  FaChartLine,
  FaCogs,
  FaHeadset,
  FaDollarSign,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import React from "react";

const WhyChooseUs = ({ dict }) => {
  const featureData = [
    {
      id: 1,
      title: dict.whyChooseUs.features[0],
      icon: <FaIndustry size={20} />,
    },
    {
      id: 2,
      title: dict.whyChooseUs.features[1],
      icon: <FaFileInvoiceDollar size={20} />,
    },
    {
      id: 3,
      title: dict.whyChooseUs.features[2],
      icon: <FaChartLine size={20} />,
    },
    {
      id: 4,
      title: dict.whyChooseUs.features[3],
      icon: <FaCogs size={20} />,
    },
    {
      id: 5,
      title: dict.whyChooseUs.features[4],
      icon: <FaHeadset size={20} />,
    },
    {
      id: 6,
      title: dict.whyChooseUs.features[5],
      icon: <FaDollarSign size={20} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const rightSectionVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mt-5 py-16 relative overflow-hidden rounded-xl">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 bg-main-color rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Features List - Left Side */}
          <motion.div
            className="flex-1 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#cb9ea7] to-pink-800 rounded-full flex items-center justify-center">
                  <FaStar className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {dict.whyChooseUs.featuresTitle}
                </h3>
              </div>

              <ul className="space-y-1">
                {featureData.map((feature) => (
                  <motion.li
                    key={feature.id}
                    variants={itemVariants}
                    className="group flex items-center gap-4 p-2 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#cb9ea7] to-pink-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(feature.icon, {
                        className: "text-white",
                      })}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 sm:text-[17px] leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {feature.title}
                      </p>
                    </div>
                    <div>
                      <FaCheckCircle className="text-green-500" size={16} />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Logo & Description - Right Side */}
          <motion.div
            className="flex-1 order-1 lg:order-2"
            variants={rightSectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-lg:text-center">
              {/* Main Title */}
              <div className="mb-8 px-2">
                <div className="inline-block bg-gradient-to-r from-[#cb9ea7] to-pink-800 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  {dict.whyChooseUs.badge}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  {dict.whyChooseUs.title}
                  <span className="text-main-color"> Flowtic</span>{" "}
                  {dict.whyChooseUs.icon}
                </h2>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                <p className="text-gray-900 text-lg leading-relaxed mb-4">
                  <span className="font-bold text-xl text-main-color">
                    Flowtic
                  </span>{" "}
                  {dict.whyChooseUs.descriptionHeading}
                </p>
                <p className="text-gray-800 leading-relaxed">
                  {dict.whyChooseUs.descriptionText}
                </p>
              </div>

              {/* Logo Container */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative flex justify-center overflow-hidden rounded-xl">
                    <Image
                      src="/images/FLOWTIC-LOGO.png"
                      alt="Flowtic Logo"
                      width={400}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-[#cb9ea7] to-pink-800 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-gradient-to-r from-[#cb9ea7] to-pink-800 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
