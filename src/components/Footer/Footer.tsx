import React from 'react';
import whiteBlu from "../../assets/WhiteBluLogo1.png"
import whiteBlu2 from "../../assets/WhiteBluLogo2.png"
import B1 from "../../assets/B1.png"
import B2 from "../../assets/B2.png"

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background B letters */}
    {/* Background Images */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  
  {/* Left Image */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none">
    <img
      src={B1}
      alt="background left"
      className="w-[170px] md:w-[320px] lg:w-[600px] object-contain"
    />
  </div>

  {/* Right Image */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2  select-none">
    <img
      src={B2}
      alt="background right"
      className="w-[170px] md:w-[320px] lg:w-[600px] object-contain"
    />
  </div>

</div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="group relative w-[170px] sm:w-[220px] md:w-[250px] h-[110px] sm:h-[130px] md:h-[155px] mt-4 lg:mt-0 overflow-hidden flex-shrink-0">
        
        {/* First Image */}
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

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-5 md:gap-8 mb-10 text-sm md:text-base">
          <a
            href="#home"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#creator"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Creator
          </a>

          <a
            href="#brand"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Brand
          </a>

          <a
            href="#gallery"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Contact Us
          </a>
        </nav>

        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto h-px bg-gray-700 mb-10"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7"
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7"
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mb-10">
          {/* Email */}
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

          {/* Address */}
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

        {/* Copyright */}
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