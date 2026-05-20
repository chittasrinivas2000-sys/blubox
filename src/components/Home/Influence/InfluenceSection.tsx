import cyanLeft from "../../../assets/glass-top-1.webp"
import cyanRight from "../../../assets/glass-top-2.webp"
import influencerImg from "../../../assets/brand-img.webp"

const stats = [
  {
    value: "2K+",
    label: "Creator Network",
    bg: cyanLeft,
  },
  {
    value: "5B+",
    label: "Views Generated",
    bg: cyanRight,
  },
  {
    value: "100+",
    label: "Content Created Yearly",
    bg: cyanLeft,
  },
  {
    value: "1K+",
    label: "Promotional Content",
    bg: cyanRight,
  },
]

export default function InfluenceSection() {
  return (
   <section className="w-full py-10 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-start text-[#1B2230] text-4xl md:text-5xl lg:text-6xl  tracking-tight mb-16">
          Think Influence, Think BLUBOX
        </h2>

        {/* Layout */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 lg:gap-2 items-center">
          {/* Left Cards */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-0 sm:gap-x-4 sm:gap-y-1 w-full">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center aspect-[1.40/1] "
              >
                {/* Background Shape */}
                <img
                  src={item.bg}
                  alt=""
                  className="absolute inset-0 w-[750px] md:w-[750px] lg:w-[900px] object-contain h-full "
                />

                {/* Content */}
                <div className="relative z-10 text-center px-6">
                  <h3 className="text-[#2C6B63] text-[34px] sm:text-[54px] lg:text-[64px] leading-none font-light">
                    {item.value}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-lg lg:text-xl text-[#0B1320] font-medium leading-tight">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden  w-full max-w-[520px]">
              <img
                src={influencerImg}
                alt="Influencer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}