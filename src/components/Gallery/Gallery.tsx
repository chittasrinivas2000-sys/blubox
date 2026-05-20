import React from "react"

import img1 from "../../assets/i1.jpg"
import img2 from "../../assets/i2.jpg"
import img3 from "../../assets/i3.jpg"
import img4 from "../../assets/i4.jpg"
import img5 from "../../assets/i5.jpg"
import img6 from "../../assets/i6.jpg"
import img7 from "../../assets/i7.jpg"
import img8 from "../../assets/i8.jpg"
import img9 from "../../assets/i1.jpg"
import img10 from "../../assets/i2.jpg"
import img11 from "../../assets/i3.jpg"
import img12 from "../../assets/i4.jpg"

import MainTop from "../../assets/MainTop.png"

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
]

const Gallery: React.FC = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        py-10
        md:py-14
        px-4
        sm:px-6
        lg:px-10
        
      "
    >
      {/* Background Design */}
          <img
        src={MainTop}
        alt="Background Design"
        className="
            absolute
            top-0
            left-100
          w-full md:w-3/4 
            pointer-events-none
            select-none
        "
        />

      <div className="relative z-10 max-w-7xl mx-auto lg:mt-20">
        
        {/* Heading */}
        <h1
          className="
            text-[#1B1B1B]
            text-[28px]
            sm:text-[36px]
            md:text-[42px]
            lg:text-[48px]
            leading-tight
            tracking-[-1px]
            mb-6
            md:mb-8
          "
          style={{
            fontFamily: "Michroma, sans-serif",
          }}
        >
          Gallery
        </h1>

        {/* Gallery Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-2
            sm:gap-3
            md:gap-4
          "
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                
                bg-white
              "
            >
              <img
                src={image}
                alt={`gallery-${index}`}
                className="
                  w-full
                  h-[170px]
                  sm:h-[220px]
                  md:h-[260px]
                  lg:h-[300px]
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery