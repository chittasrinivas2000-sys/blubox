import cyanLeft from "../../../assets/glass-top-1.png"
import cyanRight from "../../../assets/glass-top-2.png"
import influencerImg from "../../../assets/brand-img.webp"

const stats = [
  {
    value: "2",
    label: "Creator Network",
    bg: cyanLeft,
    power:"K+"
  },
  {
    value: "5",
    label: "Views Generated",
    bg: cyanRight,
     power:"B+"
  },
  {
    value: "100",
    label: "Content Created Yearly",
    bg: cyanLeft,
     power:"+"
  },
  {
    value: "1",
    label: "Promotional Content",
    bg: cyanRight,
     power:"K+"
  },
]

export default function InfluenceSection() {
  return (
   <section className="w-full py-10 lg:py-20 overflow-hidden md:px-4 lg:px-0">
      <div className="max-w-8xl mx-auto px-6 lg:ml-[140px]">
        {/* Heading */}
        <h2 className="text-start text-[#1B2230] text-4xl md:text-3xl lg:text-5xl font-['Michroma']  tracking-tight mb-16">
          Think Influence, Think BLUBOX
        </h2>

        {/* Layout */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 lg:gap-[80px] items-center">
          {/* Left Cards */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-0 sm:gap-x-4 sm:gap-y-1 w-full">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center aspect-[2.2/1.4] "
              >
                {/* Background Shape */}
                <img
                  src={item.bg}
                  alt=""
                  className="absolute inset-0 w-[750px] md:w-[750px] lg:w-[1000px] object-contain "
                />

                {/* Content */}
                <div className="relative z-10 text-center px-6">
                  <h3 className="text-[#2C6B63] text-[34px] sm:text-[54px] lg:text-[35px]  font-['Michroma'] leading-none font-medium">
                    {item.value}<sup className="font-extrabold font-['Montserrat']">{item.power}</sup>
                  </h3>

                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-lg lg:text-md text-[#0B1320] font-['Montserrat'] font-medium leading-tight">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="overflow-hidden  w-full max-w-[475px]">
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