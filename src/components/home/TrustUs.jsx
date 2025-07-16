import React from "react";
import Image from "next/image";

const TurstUs = ({ dict }) => {
  return (
    <div className="mt-18 bg-gradient-to-r from-red-50 to-indigo-50 rounded-3xl p-8 border border-pink-200">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="inline-block text-xl bg-white px-6 py-2 rounded-full shadow-sm border border-blue-200 mb-6">
          <p className="text-pink-800 font-semibold ">
            {dict.whyodo.testimonial.trustedWorldwide}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Testimonial */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative">
            {/* Quote icon */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">"</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 order-2 sm:order-1">
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 font-semibold">
                  " {dict.whyodo.testimonial.quote1}{" "}
                  <span className="text-pink-800">
                    4 {dict.whyodo.testimonial.days}
                  </span>{" "}
                  {dict.whyodo.testimonial.quote2}{" "}
                  <span className="text-sky-700">
                    3 {dict.whyodo.testimonial.hours}
                  </span>{" "}
                  {dict.whyodo.testimonial.quote3}"
                </blockquote>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 font-semibold">
                    {dict.whyodo.testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {dict.whyodo.testimonial.position}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 order-1 sm:order-2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/images/why-odoo-3.png"
                    alt="ويم فان براندي"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 order-1 lg:order-2">
          <div className="relative">
            <div className="flex justify-center bg-white rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/why-odoo-2.webp"
                alt="Odoo Success Story"
                width={310}
                height={300}
                className="rounded-xl"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl -z-10 transform rotate-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurstUs;
