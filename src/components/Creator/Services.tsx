import React from "react";
import bbLogo from "../../assets/services.png"; // adjust path if needed

const services = [
  {
    title: "Influencer Marketing",
    description:
      "From strategy to execution — we run end-to-end campaigns. The right creators, the right platforms, the right results",
  },
  {
    title: "Affiliate Marketing",
    description:
      "Creators who don’t just talk — they drive conversations. Trackable links, real results, ROI that speaks.",
  },
  {
    title: "Meme Marketing",
    description:
      "We turn your brand into a moment. Relatable, shareable, scroll-stopping memes that stick",
  },
  {
    title: "Bulk Reposting",
    description:
      "Maximize your content’s reach without lifting a finger. We distribute your message at scale through creator reposts.",
  },
  {
    title: "UGC Ads",
    description:
      "Real people. Real reviews. Real performance. We create scroll-native UGC that sells",
  },
  {
    title: "Influencer Marketing 360",
    description:
      "From product seeding to paid collabs — all under one roof. Full-stack influence, managed start to finish",
  },
  {
    title: "UGC Ads",
    description:
      "Real people. Real reviews. Real performance. We create scroll-native UGC that sells",
  },
  {
    title: "Influencer Marketing 360",
    description:
      "From product seeding to paid collabs — all under one roof. Full-stack influence, managed start to finish",
  },
];

const Services: React.FC = () => {
  return (
    <section className="w-full  py-10 px-5 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-[38px] md:text-[50px] text-[#1E2433] mb-7"
          style={{ fontFamily: "Michroma, sans-serif" }}
        >
          Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#f9fcff] border border-[#DADADA]  rounded-bl-[12px] rounded-tr-[45px] rounded-tl-[45px] rounded-br-[45px] p-5 min-h-[200px] overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-[22px] font-bold text-[#091B3A] mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-[15px] text-[#2B2B2B] leading-relaxed max-w-[95%]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {service.description}
                </p>
              </div>

              {/* BB Logo */}
              <img
                src={bbLogo}
                alt="BB Logo"
                className="absolute bottom-5 right-5 w-[150px] "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;