import React from "react"
import MainTop from "../../assets/MainTop.png"
import BluboxBlack from "../../assets/BluboxLogoBlack.png"
import Campaing from "../../assets/Campaing.webp"
import talent from "../../assets/design.webp"
import blubox from "../../assets/BluboxLogo.svg"

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden  px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      <img
        src={MainTop}
        alt="Background Design"
        className="
            absolute
            top-0
            left-0
          w-full md:w-3/4 
            pointer-events-none
            select-none
            
        "
        />

      <div className="relative z-10 max-w-5xl mx-auto lg:mt-[70px] md:mt-[15px]">
        
       
        <div className="flex flex-col lg:flex-row md:flex-row items-center lg:items-start justify-between ">
          
          {/* Heading */}
          <div className="max-w-5xl">
            <h4 className="text-[#07152d] font-bold  text-[22px] sm:text-[28px] md:text-[28px] lg:text-[36px] leading-tight ">
              We are Blubox Media, The Internet’s Storytellers.<br/>
              Where Reels Hit and Culture Moves.<br/>
              No Noise. Just Influence.
            </h4>
          </div>

          

      <div className="group relative w-[170px] sm:w-[220px] md:w-[250px] h-[110px] sm:h-[130px] md:h-[155px] mt-4 lg:mt-0 overflow-hidden flex-shrink-0">
        
        {/* First Image */}
        <img
          src={BluboxBlack}
          alt="Blubox Black Logo"
          className="
            absolute
            top-0
            left-0
            w-full
            h-full
            object-contain
            transition-all
            duration-300
            ease-in-out
            group-hover:-translate-y-full
            group-hover:opacity-0
          "
        />

        {/* Second Image */}
        <img
          src={blubox}
          alt="Blubox White Logo"
          className="
            absolute
            top-full
            left-0
            w-full
            h-full
            object-contain
            transition-all
            duration-300
            ease-in-out
            opacity-0

            group-hover:top-0
            group-hover:opacity-100
          "
        />
      </div>
        </div>

       
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 md:justify-items-center lg:justify-items-stretch">
          
   
          <div  className="bg-[#fbfbfb] px-3 py-3 rounded-tl-[10px] rounded-tr-[80px] rounded-br-[80px] rounded-bl-[80px]   transition-all duration-500 ease-in-out  hover:shadow-[-10px_10px_30px_rgba(0,0,0,0.18)] w-full md:max-w-[600px] ">
                <div className="relative bg-[#e6ffd8] min-h-[150px] sm:h-[160px] rounded-tl-[10px] rounded-tr-[80px] rounded-br-[80px] rounded-bl-[80px] px-5 py-5 sm:px-7 sm:py-8 flex items-center justify-between shadow-sm overflow-hidden">
            
            <div className="max-w-[60%]">
              <h5 className="text-[#07152d] font-bold text-lg sm:text-xl md:text-2xl mb-2">
                Blubox Campaign
              </h5>

              <p className="text-[#1e2d42] text-sm sm:text-base leading-relaxed">
                Not just campaigns - complete influence solutions.
                All under Blubox
              </p>
            </div>

            <img
              src={Campaing}
              alt="Campaign"
              className="w-[70px] sm:w-[85px] md:w-[95px] object-contain"
            />
          </div>

          </div>
        

     
          <div className="bg-[#fbfbfb] px-3 py-3 rounded-tl-[10px] rounded-tr-[80px] rounded-br-[80px] rounded-bl-[80px]   transition-all  duration-300 ease-in-out hover:shadow-[-10px_10px_30px_rgba(0,0,0,0.18)] w-full md:max-w-[600px]">
            <div className="relative bg-[#fff4f0]  min-h-[150px] sm:h-[160px] rounded-tl-[10px] rounded-tr-[80px] rounded-br-[80px] rounded-bl-[80px] px-5 py-5 sm:px-7 sm:py-8 flex items-center justify-between shadow-sm overflow-hidden">
            
            <div className="max-w-[60%]">
              <h5 className="text-[#07152d] font-bold text-lg sm:text-xl md:text-2xl mb-4">
                Blubox Talents
              </h5>

              <p className="text-[#1e2d42] text-sm sm:text-base leading-relaxed">
                You do the creating.
                We do the cheering, pitching, and fixing.
              </p>
            </div>

            <img
              src={talent}
              alt="Talents"
              className="w-[70px] sm:w-[85px] md:w-[95px] object-contain"
            />
          </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default HeroSection