const HeaderSection = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold pb-5 bg-gradient-to-r from-gray-800 via-pink-900 to-[#a05b6a] bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#cb9ea7] to-pink-800 mx-auto rounded-full mb-3"></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HeaderSection;
