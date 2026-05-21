import React from "react";

interface Creator {
  id: number;
  name: string;
  image: string;
}

interface CelebrityCreatorsProps {
  title: string;
  items: Creator[];
  direction?: "left" | "right";
  showButton?: boolean;
}

const CelebrityCreators: React.FC<CelebrityCreatorsProps> = ({
  title,
  items,
  direction = "left",
  showButton = true,
}) => {
  const duplicatedItems = [...items, ...items];

  return (
    <section className="w-full  py-10 overflow-hidden">
      <div className="max-w-full mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 ml-[150px]">
          <h2
            className="text-[24px] md:text-[34px] text-[#1d1d1d]"
            style={{ fontFamily: "Michroma" }}
          >
            {title}
          </h2>

          {showButton && (
            <button
              className="border border-black rounded-full 
              px-5 py-2 text-sm md:text-base
              hover:bg-black hover:text-white transition-all duration-300 mr-[150px]"
              style={{ fontFamily: "Montserrat" }}
            >
              View All
            </button>
          )}
        </div>

        {/* Scroll Wrapper */}
        <div className="relative overflow-hidden">
          <div
            className={`flex gap-4 w-max ${
              direction === "left"
                ? "animate-scroll-left"
                : "animate-scroll-right"
            }`}
          >
            {duplicatedItems.map((creator, index) => (
              <div
                key={`${creator.id}-${index}`}
                className="relative min-w-[180px] md:min-w-[220px] 
                h-[250px] md:h-[300px]
                rounded-[24px] overflow-hidden group flex-shrink-0"
              >
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Name */}
                <div className="absolute bottom-5 left-0 bg-[#808080] opacity-80 flex items-center gap-2 text-white rounded-tr-[20px] rounded-br-[20px] px-2">
                  <span className="text-lg">→</span>
                  <p
                    className="text-sm md:text-base"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {creator.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityCreators;