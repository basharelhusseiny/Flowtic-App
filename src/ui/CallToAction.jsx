import Link from "next/link";

const CallToAction = ({ dict }) => {
  return (
    <section
      className="py-10 px-5 relative bg-cover bg-center bg-no-repeat mb-0"
      style={{
        backgroundImage:
          "linear-gradient(120deg,rgba(16,18,23,0.92) 60%,rgba(136,19,55,0.85)), url('/images/services/DSC09917.webp')",
      }}
    >
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-2xl w-full text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white drop-shadow-lg">
            {dict.callToAction.heading}
          </h3>
          <p className="text-white/90 mb-8 leading-relaxed md:text-lg">
            {dict.callToAction.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-red-800 font-semibold px-8 py-3 rounded-full hover:bg-red-100 transition shadow-lg text-lg"
            >
              {dict.callToAction.contact}
            </Link>
            <Link
              href="/product-category"
              className="group inline-flex items-center justify-center gap-2 border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-red-800 transition font-semibold shadow-lg text-white text-lg"
            >
              {dict.callToAction.explore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
