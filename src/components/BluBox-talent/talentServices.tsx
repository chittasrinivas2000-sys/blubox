import React from "react";

const servicesData = [
  {
    title: "Talent Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    bgColor: "bg-[#F6F1EE]",
    border: "",
    shadow: true,
    comingSoon: false,
  },
  {
    title: "Affiliate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    bgColor: "bg-[#EAF3F7]",
    border: "",
    shadow: false,
    comingSoon: true,
  },
  {
    title: "BrandME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    bgColor: "bg-[#DDF2DB]",
    border: "",
    shadow: false,
    comingSoon: true,
  },
];

const TalentServices: React.FC = () => {
  return (
    <section className="w-full py-12 px-5 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-[32px] md:text-[52px] text-[#252938] mb-10"
          style={{ fontFamily: "Michroma" }}
        >
          Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`
                relative
                ${service.bgColor}
                ${service.border}
                rounded-tl-[10px]
                rounded-tr-[80px]
                rounded-bl-[80px]
                rounded-br-[80px]
                px-9 py-8
                min-h-[120px]
                transition-all duration-300
                hover:scale-[1.02]
                ${
                  service.shadow
                    ? ""
                    : ""
                }
              `}
            >
              {/* Coming Soon */}
              {service.comingSoon && (
                <span
                  className="absolute top-7 right-7 text-[#4169FF] text-[12px] font-semibold"
                  style={{ fontFamily: "Montserrat" }}
                >
                  *Coming Soon*
                </span>
              )}

              {/* Title */}
              <h3
                className="text-[20px] font-bold text-black mb-3"
                style={{ fontFamily: "Montserrat" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#5C5C5C] text-[15px] leading-relaxed max-w-[270px]"
                style={{ fontFamily: "Montserrat" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalentServices;