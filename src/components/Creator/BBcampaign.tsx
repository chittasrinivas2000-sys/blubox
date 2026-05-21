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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {campaignData.map((item, index) => (
            <div
              key={index}
              className="relative text-center px-0 flex flex-col items-center"
            >
              {/* Vertical Line */}
              {index !== campaignData.length - 1 && (
                <div
                  className="
                    hidden md:block 
                    absolute 
                    right-0 
                    lg:left-[410px]
                    md:left-[250px]
                    md:h-[250px]
                    top-[200px] 
                    h-[180px] 
                    w-[1px] 
                    bg-[#E5E5E5]
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
                    lg:max-w-[450px] 
                    lg:h-[220px] 
                    md:h-[170px]
                    
                    rounded-[60px]
                  "
                />
              </div>

            <div className="md:w-[150px] md:mx-auto">
              <h3
                className="text-[24px] font-semibold text-black mb-3 md:text-md"
                style={{ fontFamily: "Montserrat" }}
              >
                {item.title}
              </h3>

          
              <p
                className="text-[14px] text-[#5A5A5A] leading-relaxed max-w-[300px]"
                style={{ fontFamily: "Montserrat" }}
              >
                {item.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BBCampaign;