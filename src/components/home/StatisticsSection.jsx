"use client";
import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import HeaderSection from "@/ui/HeaderSection";
import {
  FaClock,
  FaRocket,
  FaRobot,
  FaFileInvoiceDollar,
  FaChartLine,
} from "react-icons/fa";
import WhyChooseUs from "./WhyChooseUs";

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target);
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

  return <span ref={ref}>{count}</span>;
};

const StatisticsSection = ({ dict }) => {
  const statisticsData = [
    {
      id: 1,
      title: "خفض وقت العمليات اليومية​",
      number: 60,
      icon: <FaClock size={40} />,
      color: "from-pink-500 to-red-500",
    },
    {
      id: 2,
      title: "تسريع اتخاذ القرار​",
      number: 50,
      icon: <FaRocket size={40} />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 3,
      title: "تخفيض الاعتماد على الإدخال اليدوي​",
      number: 70,
      icon: <FaRobot size={40} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "الامتثال السهل للفوترة الإلكترونية​",
      number: 100,
      icon: <FaFileInvoiceDollar size={40} />,
      color: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      title: "تحسين دقة التقارير المالية​",
      number: 92,
      icon: <FaChartLine size={40} />,
      color: "from-orange-500 to-red-500",
    },
  ];

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
    hidden: { y: 50, opacity: 0 },
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

  return (
    <section id="Why-Us" className="scroll-mt-[72px] py-10 relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 text-black z-0">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-15">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-main-color rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-10 w-20 h-20 bg-pink-900 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-main-color rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <HeaderSection
          title={dict.statistics.title}
          description={dict.statistics.description}
        />

        {/* Statistics Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {statisticsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 h-full flex flex-col justify-between">
                {/* Icon */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {React.cloneElement(stat.icon, {
                    style: {
                      fill:
                        stat.color.split(" ")[0].replace("from-", "") ===
                        "pink-500"
                          ? "#EC4899"
                          : stat.color.split(" ")[0].replace("from-", "") ===
                            "blue-500"
                          ? "#3B82F6"
                          : stat.color.split(" ")[0].replace("from-", "") ===
                            "purple-500"
                          ? "#8B5CF6"
                          : stat.color.split(" ")[0].replace("from-", "") ===
                            "green-500"
                          ? "#10B981"
                          : stat.color.split(" ")[0].replace("from-", "") ===
                            "orange-500"
                          ? "#F97316"
                          : "#000",
                    },
                  })}
                </div>
                {/* Number with animation */}
                <div
                  className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  <AnimatedCounter target={stat.number} />
                  <span className="text-4xl">%</span>
                </div>

                {/* Title */}
                <h3 className="text-gray-700 font-semibold text-lg leading-tight">
                  {dict.statistics.items[stat.id]}
                </h3>

                {/* Decorative element */}
                <div
                  className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${stat.color} rounded-full opacity-80 group-hover:scale-150 transition-transform duration-300`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <WhyChooseUs dict={dict} />
      </div>
    </section>
  );
};

export default StatisticsSection;
