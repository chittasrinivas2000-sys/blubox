import React from "react";
import bgImage from "../../assets/young-blogger-influencers-shooting-themselves.jpg";
import logo from "../../assets/BBMediaWhite.png";

const AboutUs: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[500px] md:min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[500px] md:min-h-[600px] px-5 md:px-12 lg:px-20 py-8 gap-6">
        
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2 lg:ml-[80px]">
          <img
            src={logo}
            alt="Blubox Media"
            className="w-[350px] sm:w-[320px] md:w-[380px] lg:w-[460px] object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white max-w-md">
          <h2 className="text-6xl sm:text-4xl md:text-7xl mb-4 font-semibold">
            About Us
          </h2>

          <p className="text-sm sm:text-base md:text-xl leading-6 md:leading-6 text-gray-200 w-[380px]">
            It started with a belief — that great stories shape culture.
            So we built Blubox to connect brands with voices that matter.
            From scroll-stopping content to campaigns that convert, we do
            it all. Not just for reach, but for real impact. This is where
            influence begins — and moves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;