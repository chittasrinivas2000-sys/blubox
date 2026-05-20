import React from "react"

import Mail from "../../assets/mail.png"
import  MapPin  from "../../assets/location.png"

import bgImage from "../../assets/bg-rectangle.png"

const ContactUs: React.FC = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        bg-cover
        bg-center
        bg-no-repeat
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgImage})`,
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-12
          lg:py-20
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-12
          "
        >
          {/* Left Side */}
          <div className="w-full lg:w-[45%] flex items-center justify-center">
            <div>
                 <h1
              className="
                text-[#1B2230]
                text-[42px]
                sm:text-[60px]
                md:text-[50px]
                lg:text-[60px]
                leading-none
                tracking-[-3px]
              "
              style={{
                fontFamily: "Michroma, sans-serif",
              }}
            >
              Contact Us
            </h1>

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-2">
              <div
  className="
    w-11
    h-11
    flex
    items-center
    justify-center
    shrink-0
  "
>
                  <img src={Mail}  className="h-[25px] w-[30px]"/>
               
                </div>

                <p
                  className="
                    text-[#1B2230]
                    text-[15px]
                    sm:text-[15px]
                    font-semibold
                  "
                >
                  Hello@blubox.im
                </p>
              </div>

              <div className="flex items-center gap-4">
             <div
                className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    shrink-0
                "
                >
                 <img src={MapPin} className="h-[25px] w-[20px]"/>
                </div>

                <p
                  className="
                    text-[#1B2230]
                    text-[16px]
                    sm:text-[15px]
                    font-semibold
                    max-w-[500px]
                  "
                >
                  B4, Sector 63, 1st Floor, Noida - 201301.
                </p>
              </div>
            </div>
            </div>
           
          </div>

          {/* Right Side Form */}
          <div
            className="
              w-full
              lg:w-[48%]
              bg-black
              rounded-[30px]
              p-6
              sm:p-8
              md:p-10
              shadow-2xl
            "
          >
            <h2
              className="
                text-white
                text-[34px]
                sm:text-[46px]
                md:text-[40px]
                leading-none
                mb-8
              "
              style={{
                fontFamily: "Michroma, sans-serif",
              }}
            >
              Get In Touch
            </h2>

            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  className="
                    text-white
                    text-[16px]
                    mb-2
                    block
                    font-medium
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full
                    h-[40px]
                    rounded-3xl
                    border
                    border-[#2A3142]
                    bg-transparent
                    px-6
                    text-white
                    outline-none
                    placeholder:text-[#5B6480]
                    focus:border-white
                    transition-all
                  "
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    className="
                      text-white
                      text-[16px]
                      mb-3
                      block
                      font-medium
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="
                      w-full
                      h-[40px]
                      rounded-3xl
                      border
                      border-[#2A3142]
                      bg-transparent
                      px-6
                      text-white
                      outline-none
                      placeholder:text-[#5B6480]
                      focus:border-white
                      transition-all
                    "
                  />
                </div>

                <div>
                  <label
                    className="
                      text-white
                      text-[16px]
                      mb-3
                      block
                      font-medium
                    "
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Email"
                    className="
                      w-full
                      h-[40px]
                      rounded-3xl
                      border
                      border-[#2A3142]
                      bg-transparent
                      px-6
                      text-white
                      outline-none
                      placeholder:text-[#5B6480]
                      focus:border-white
                      transition-all
                    "
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  className="
                    text-white
                    text-[16px]
                    mb-3
                    block
                    font-medium
                  "
                >
                  Message
                </label>

                <textarea
                  rows={2}
                  placeholder="Your Message"
                  className="
                    w-full
                    rounded-[15px]
                    border
                    border-[#2A3142]
                    bg-transparent
                    p-2
                    text-white
                    outline-none
                    resize-none
                    placeholder:text-[#5B6480]
                    focus:border-white
                    transition-all
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full
                  h-[45px]
                  bg-white
                  rounded-full
                  text-black
                  text-[17px]
                  font-semibold
                  hover:scale-[1.01]
                  transition-all
                "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs