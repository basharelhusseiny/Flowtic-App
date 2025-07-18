import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ dict, locale }) => {
  return (
    <section className="relative py-16 flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-100">
      <div className="container mx-auto px-5">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-100 to-orange-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-5 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Content Section */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-800 via-pink-900 to-[#a05b6a] bg-clip-text text-transparent">
                    {dict.hero.title_line_1}
                  </span>
                  <br />
                  <span className="text-gray-700">
                    {dict.hero.title_line_2}
                  </span>
                </h1>

                <div className="w-24 h-1 bg-gradient-to-r from-[#cb9ea7] to-pink-800  mx-auto lg:mx-0 rounded-full"></div>

                <h2 className="text-lg font-semibold text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {dict.hero.description_1.replace(
                    "{odoo}",
                    dict.hero.highlight_odoo
                  )}
                  <br />
                  {dict.hero.description_2.replace(
                    "{company}",
                    dict.hero.highlight_company
                  )}
                </h2>

                <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
                  {dict.hero.subtext}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-3">
                  <Link
                    href="/contact"
                    className="flex justify-center items-center h-[50px] bg-gradient-to-r from-[#cb9ea7] to-pink-800 text-white px-8 rounded-full font-semibold text-lg hover:from-pink-800 hover:to-[#cb9ea7]  transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    {dict.hero.cta_start}
                  </Link>
                  <Link
                    href="/demo"
                    className="flex justify-center items-center h-[50px] border-2 border-gray-300 text-gray-700 px-8  rounded-full font-semibold text-lg hover:border-[#a05b6a] hover:text-[#8b4c59] transition-all duration-300"
                  >
                    {dict.hero.cta_demo}
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{dict.hero.trusted_by}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{dict.hero.support}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="relative">
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-pink-800 rounded-lg opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-[#934f5e] rounded-full opacity-30 animate-bounce"></div>

                {/* Main image container */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/Hero-image.png"
                      alt="Odoo ERP System Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-4 right-8 bg-white rounded-xl shadow-lg p-3 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-800">
                      {dict.hero.tag_integrated}
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-4 left-8 bg-white rounded-xl shadow-lg p-3 animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-800">
                      {dict.hero.tag_easy}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
