import React from "react"

import Cetaphil from "../../../assets/cetaphil.jpg"
import Venus from "../../../assets/venus.jpg"
import Braun from "../../../assets/braun.jpg"
import Garnier from "../../../assets/garnier.jpg"
import Swiss from "../../../assets/sb.jpg"
import Simple from "../../../assets/simple.jpg"
import Nykaa from "../../../assets/nykaa.jpg"
import Meesho from "../../../assets/meesho.jpg"
import Parachute from "../../../assets/parachute.jpg"

const brands = [
  Cetaphil,
  Venus,
  Braun,
  Garnier,
  Swiss,
  Simple,
  Nykaa,
  Meesho,
  Parachute,
]

const BrandScroller: React.FC = () => {
  return (
    <section className="w-full overflow-hidden  py-5 md:py-8">
      
      <div className="relative flex overflow-hidden">
        
        <div className="animate-marquee flex min-w-max items-center gap-4 sm:gap-2 md:gap-5 lg:gap-5">
          
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0"
            >
              <img
                src={brand}
                alt={`brand-${index}`}
                className="
                  h-[100px]
                  sm:h-[100px]
                  md:h-[100px]
                  lg:h-[150px]
                  w-[200px]
                  object-contain
                "
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default BrandScroller