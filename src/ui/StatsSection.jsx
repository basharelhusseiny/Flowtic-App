"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { FaTrophy, FaBoxes, FaHandshake, FaTruck } from "react-icons/fa";

// Stats Counter Animation Component
const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target.replace(/[^0-9]/g, ""));
    const incrementTime = Math.floor(duration / end);

    if (end <= 0) return;

    setCount(0);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  const displayValue = target.includes("k+")
    ? `${count}k+`
    : target.includes("+")
    ? `${count}+`
    : count;

  return <span ref={ref}>{displayValue}</span>;
};

const StatsSection = ({ stats, dict }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        damping: 10,
      },
    },
  };

  const icons = [
    <FaTrophy key="trophy" size={36} className="text-yellow-300" />,
    <FaBoxes key="boxes" size={36} className="text-sky-300" />,
    <FaHandshake key="handshake" size={36} className="text-green-300" />,
    <FaTruck key="truck" size={36} className="text-orange-300" />,
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-700 to-red-900 z-0">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute top-20 right-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300 border border-white/20 shadow-xl"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex justify-center mb-4">{icons[index]}</div>
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                <AnimatedCounter target={stat.number} />
              </div>
              <div className="text-white text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
