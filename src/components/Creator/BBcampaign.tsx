import React from "react";

import contentStrategyImg from "../../assets/collab1.jpg";
import organicBoostImg from "../../assets/collab2.jpg";
import complimentaryImg from "../../assets/collab3.jpg";

const campaignData = [
  {
    image: contentStrategyImg,
    title: "Content Strategy",
    description:
      "We ensure every content has the right hook for maximum views and engagement-no weak content goes live.",
  },
  {
    image: organicBoostImg,
    title: "Organic Boost",
    description:
      "If performance still lags, we ensure organic boosts via creator's IS Stories, Broadcast, Telegram, or YT Community Posts",
  },
  {
    image: complimentaryImg,
    title: "Complimentary",
    description:
      "Still not meeting goals? We provide complimentary content from our in-house creators to fill the gap",
  },
];

const BBCampaign: React.FC = () => {
  return (
    <section className="w-full  py-12 px-5 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-[28px] md:text-[38px] text-[#2B2E3A] mb-10"
          style={{ fontFamily: "Michroma" }}
        >
          BB 30 Campaign
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {campaignData.map((item, index) => (
            <div
              key={index}
              className="relative text-center px-4 flex flex-col items-center"
            >
              {/* Vertical Line */}
              {index !== campaignData.length - 1 && (
                <div
                  className="
                    hidden md:block 
                    absolute 
                    right-0 
                    top-[200px] 
                    h-[160px] 
                    w-[1px] 
                    bg-gray-300
                  "
                />
              )}

              {/* Image */}
              <div className="mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full 
                    max-w-[351px] 
                    h-[190px] 
                    
                    rounded-[60px]
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="text-[24px] font-semibold text-black mb-3"
                style={{ fontFamily: "Montserrat" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-[14px] text-[#5A5A5A] leading-relaxed max-w-[300px]"
                style={{ fontFamily: "Montserrat" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BBCampaign;