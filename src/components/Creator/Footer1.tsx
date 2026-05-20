import React from 'react';
import { useNavigate } from "react-router-dom";
import whiteBlu from "../../assets/WhiteBluLogo1.png"
import whiteBlu2 from "../../assets/WhiteBluLogo2.png"
import B1 from "../../assets/B1.png"
import B2 from "../../assets/B2.png"
import linkedinIcon from "../../assets/linkedIn.png"
import instagram from "../../assets/instagram.png"

const Footer: React.FC = () => {
        const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

   const handleNavigateCreators = () => {
    navigate("/creators");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleNavigateBrand = () => {
    navigate("/brand");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
   const handleNavigateGallery = () => {
    navigate("/gallery");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
   const handleNavigateContactUs = () => {
    navigate("/contactus");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="relative bg-black text-white overflow-hidden">
  
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  
 
  <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none">
    <img
      src={B1}
      alt="background left"
      className="w-[170px] md:w-[320px] lg:w-[600px] object-contain"
    />
  </div>


  <div className="absolute right-0 top-1/2 -translate-y-1/2  select-none">
    <img
      src={B2}
      alt="background right"
      className="w-[170px] md:w-[320px] lg:w-[600px] object-contain"
    />
  </div>

</div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
     
        <div className="flex justify-center mb-10">
          <div className="group relative w-[170px] sm:w-[220px] md:w-[250px] h-[110px] sm:h-[130px] md:h-[155px] mt-4 lg:mt-0 overflow-hidden flex-shrink-0">
        
       
        <img
          src={whiteBlu}
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
          src={whiteBlu2}
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

        <nav className="flex flex-wrap justify-center gap-5 md:gap-8 mb-10 text-sm md:text-base">
             <div
      onClick={handleNavigate}
      className="group relative overflow-hidden inline-block h-6 cursor-pointer"
    >
      <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
        <span>Home</span>
        <span>Home</span>
      </span>
    </div>

           <div
      onClick={handleNavigateCreators}
      className="group relative overflow-hidden inline-block h-6 cursor-pointer"
    >
      <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
        <span>creator</span>
        <span>creator</span>
      </span>
    </div>


              <div
      onClick={handleNavigateBrand}
      className="group relative overflow-hidden inline-block h-6 cursor-pointer"
    >
      <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
        <span>Brand</span>
        <span>Brand</span>
      </span>
    </div>

              <div
      onClick={handleNavigateGallery}
      className="group relative overflow-hidden inline-block h-6 cursor-pointer"
    >
      <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
        <span>Gallery</span>
        <span>Gallery</span>
      </span>
    </div>

        <div
      onClick={handleNavigateContactUs}
      className="group relative overflow-hidden inline-block h-6 cursor-pointer"
    >
      <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
        <span>Contact Us</span>
        <span>Contact Us</span>
      </span>
    </div>

        </nav>

      <div className="flex justify-center items-center">

         <div className="w-full max-w-md ml-auto h-px bg-[#3F3F46] mb-10"></div>
              <div className="flex justify-center gap-6 mb-10">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300 ml-2"
          >
            <img
            src={instagram}
            alt="Instagram"
            className="w-15 h-15 md:w-15 md:h-15 lg:w-6 lg:h-6 object-contain"
          />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300 mr-2"
          >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-15 h-15 md:w-15 md:h-15 lg:w-6 lg:h-6 object-contain"
          />
          </a>
        </div>
         <div className="w-full max-w-md  mr-auto h-px bg-[#3F3F46] mb-10"></div>

        </div>

       

      
      
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mb-10">
       
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
            </svg>

            <a
              href="mailto:team@blubox.media"
              className="text-sm md:text-base hover:text-gray-300 transition-colors duration-300"
            >
              team@blubox.media
            </a>
          </div>

        
          <div className="flex items-center gap-3 max-w-xl">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>

            <span className="text-sm md:text-base text-center md:text-left">
              1st Floor, H54, Sector 63, Noida, Uttar Pradesh - 201301
            </span>
          </div>
        </div>

      
        <div className="text-center text-xs md:text-sm text-gray-400">
          Copyright © 2024 Blubox Media. All rights reserved. Site By{' '}
          <span className="text-white font-medium">
            Blue Infinity Tech
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;