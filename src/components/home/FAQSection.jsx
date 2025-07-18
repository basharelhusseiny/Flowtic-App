"use client";
import HeaderSection from "@/ui/HeaderSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQSection = ({ dict }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-5 max-w-3xl">
        <HeaderSection
          title={dict.faq.title}
          description={dict.faq.description}
        />

        <div className="space-y-3">
          {dict.faq.questions.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-3 p-4 text-gray-900 focus:outline-none cursor-pointer"
              >
                <h2 className="sm:text-lg font-semibold text-start">
                  {faq.question}
                </h2>
                <motion.div
                  className="relative size-7 shrink-0"
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                    scale: activeIndex === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <FaChevronDown
                    className="size-7 text-white p-1.5 bg-gradient-to-r from-[#cb9ea7] to-pink-800 rounded-full"
                    size={20}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-6 overflow-hidden"
                  >
                    <div className="prose prose-lg max-w-none text-gray-900">
                      <ul className="mt-2 space-y-4">
                        {faq.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-[15px]"
                          >
                            <span className="mt-1.5 size-2 bg-pink-800 rounded-full shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
