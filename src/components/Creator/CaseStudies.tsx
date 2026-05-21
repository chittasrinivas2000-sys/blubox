import React from "react";

// Campaign Images
import diyaImg from "../../assets/diwali.jpg";
import colorsImg from "../../assets/holi.jpg";
import durgaImg from "../../assets/dussera.jpg";

// Social Icons
import instagramIcon from "../../assets/Background.png";



const caseStudiesData = [
  {
    image: diyaImg,
    title: "Diwali Campaign",
    views: "1.7M",
    creators: "25",
  },
  {
    image: colorsImg,
    title: "Diwali Campaign",
    views: "1.7M",
    creators: "25",
  },
  {
    image: durgaImg,
    title: "Diwali Campaign",
    views: "1.7M",
    creators: "25",
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section className="w-full  py-12 px-5 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <h2
            className="text-[28px] md:text-[50px] text-[#232733]"
            style={{ fontFamily: "Michroma" }}
          >
            Case Studies
          </h2>

          <button
            className="
              border border-[#4A4A4A]
              rounded-full
              px-8 py-4
              text-[16px]
              hover:bg-black
              hover:text-white
              transition-all duration-300
            "
            style={{ fontFamily: "Montserrat" }}
          >
            View All
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((item, index) => (
            <div
              key={index}
              className="
            w-[390px]
                border border-[#D8D8D8]
                rounded-[28px]
                overflow-hidden
                transition-all duration-300
                hover:shadow-lg
              "
            >
              {/* Image */}
              <div className="relative pb-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[370px]
                    object-cover
                    rounded-[24px]
                  "
                />

                {/* Slider Dots */}
                
              </div>

              {/* Content */}
              <div className="px-5 pb-5 pt-4">
                <h3
                  className="text-[24px] font-bold text-[#121212] mb-5"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {item.title}
                </h3>

                {/* Stats */}
                <div className="flex justify-between items-center">
                  {/* Views */}
                  <div>
                    <p
                      className="text-[13px] text-[#666]"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Views
                    </p>
                    <p
                      className="text-[24px] font-semibold text-[#232323]"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      {item.views}
                    </p>
                  </div>

                  {/* Divider */}
                  

                  {/* Creators */}
                  <div>
                    <p
                      className="text-[13px] text-[#666]"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Creators
                    </p>
                    <p
                      className="text-[24px] font-semibold text-[#232323]"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      {item.creators}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-[1px] h-[42px] bg-[#D3D3D3]" />

                  {/* Platform */}
                  <div>
                    <p
                      className="text-[13px] text-[#666] mb-1"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Platform
                    </p>

                    <div className="flex">
                      <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="w-15 h-8"
                      />
                      
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

export default CaseStudies;