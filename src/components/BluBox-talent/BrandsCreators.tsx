import React from "react";
import Share from "../../assets/Share_1.png";
import instagram from "../../assets/insta.png";
import youtube from "../../assets/youtube.png";

interface Creator {
  id: number;
  creatorImage: string;
  brandLogo: string;
  reach: string;
  platform: "instagram" | "youtube";
}

interface BrandsCreatorsProps {
  title: string;
  creators: Creator[];
}

const BrandsCreators: React.FC<BrandsCreatorsProps> = ({
  title,
  creators,
}) => {
  return (
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2
            className="text-[22px] sm:text-[30px] md:text-[42px] text-[#1f2230]"
            style={{ fontFamily: "Michroma" }}
          >
            {title}
          </h2>

          <button
            className="
              border border-black rounded-full 
              px-5 md:px-8 py-2 md:py-3
              text-sm md:text-base
              hover:bg-black hover:text-white
              transition-all duration-300
            "
            style={{ fontFamily: "Montserrat" }}
          >
            View All
          </button>
        </div>

        {/* Cards Grid */}
        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8 justify-items-center
          "
        >
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="
                border border-[#d8d8d8]
                rounded-[28px]
                overflow-hidden
                w-full
                max-w-[400px]
                bg-white
                transition-transform duration-300
                hover:-translate-y-2
              "
            >
              {/* Creator Image */}
              <div className="h-[170px] overflow-hidden">
                <img
                  src={creator.creatorImage}
                  alt="creator"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-5">
                  {/* Brand Logo */}
                  <div className="min-w-[130px] h-[70px] flex items-center">
                    <img
                      src={creator.brandLogo}
                      alt="brand"
                      className="max-w-[140px] max-h-[55px] object-contain"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1">
                    {/* Reach */}
                    <div>
                      <p
                        className="text-[14px] text-[#555] font-medium"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Reach
                      </p>

                      <h4
                        className="text-[20px] md:text-[22px] font-semibold text-[#1f2230]"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        {creator.reach}
                      </h4>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#d8d8d8] my-3" />

                    {/* Platform */}
                    <div>
                      <p
                        className="text-[14px] text-[#555] font-medium mb-2"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Platform
                      </p>

                      <div className="flex items-center gap-2">
                        {/* Platform Icon */}
                        <div className="bg-[#F5F5F5] rounded-[10px] px-2 py-1 flex items-center justify-center">
                          <img
                            src={
                              creator.platform === "instagram"
                                ? instagram
                                : youtube
                            }
                            alt={creator.platform}
                            className="w-6 h-6 object-contain"
                          />
                        </div>

                        {/* Share Icon */}
                        <div className="bg-[#F5F5F5] rounded-[10px] p-2 flex items-center justify-center">
                          <img
                            src={Share}
                            alt="share"
                            className="w-4 h-4 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCreators;