"use client";
import { useState } from "react";
import Image from "next/image";
import HeaderSection from "@/ui/HeaderSection";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBolt,
  FaEuroSign,
  FaDollarSign,
  FaMobile,
  FaGlobe,
  FaMobileAlt,
  FaSync,
  FaUsers,
} from "react-icons/fa";
import TurstUs from "./TrustUs";

const WhyOdooSection = ({ dict }) => {
  const featuresData = [
    { id: 2, titleKey: "feature1", icon: <FaBolt size={20} /> },
    { id: 3, titleKey: "feature2", icon: <FaEuroSign size={20} /> },
    { id: 4, titleKey: "feature3", icon: <FaDollarSign size={20} /> },
    { id: 5, titleKey: "feature4", icon: <FaMobile size={20} /> },
    { id: 6, titleKey: "feature5", icon: <FaGlobe size={20} /> },
    { id: 7, titleKey: "feature6", icon: <FaMobileAlt size={20} /> },
    { id: 8, titleKey: "feature7", icon: <FaSync size={20} /> },
    { id: 9, titleKey: "feature8", icon: <FaUsers size={20} /> },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="pt-10 pb-14 px-4 bg-gradient-to-tl from-gray-50 via-white to-red-100 relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10">
        <HeaderSection
          title={dict.whyodo.title}
          description={dict.whyodo.subtitle}
        />

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Image Side with 3D effect */}
          <motion.div
            className="flex-1 order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main image with 3D effect */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 transform hover:rotate-1 transition-transform duration-700 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]">
                <Image
                  src="/images/why-odoo.png"
                  alt="Odoo ERP Platform"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />

                {/* Floating badges */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-800 to-[#ad6d7b] text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3 animate-float">
                  <span className="text-sm font-bold">
                    {dict.whyodo.highlights.apps}
                  </span>
                </div>

                <div className="absolute -bottom-5 -left-5 bg-gradient-to-r from-[#ad6d7b] to-pink-800 text-white px-4 py-2 rounded-lg shadow-lg transform -rotate-2 animate-float-delayed">
                  <span className="text-sm font-bold">
                    {dict.whyodo.highlights.users}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="flex-1 order-2 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-100">
              <h3 className="text-2xl tracking-wide font-bold text-pink-900 mb-6">
                {dict.whyodo.sectionTitle}
              </h3>

              {featuresData.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  className={`mb-2 cursor-pointer transform transition-all duration-300`}
                >
                  <div
                    className={`flex items-center gap-4 p-2 rounded-xl ${"bg-white hover:bg-red-50 text-gray-700 shadow-md"}`}
                  >
                    <div
                      className={`w-10 h-10 text-pink-800 flex items-center justify-center rounded-full bg-gray-100`}
                    >
                      {feature.icon}
                    </div>

                    <div className="flex items-center justify-between text-[15px] sm:text-lg font-medium w-full">
                      {dict.whyodo.features[feature.titleKey]}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <TurstUs dict={dict} />
      </div>
    </section>
  );
};

export default WhyOdooSection;
