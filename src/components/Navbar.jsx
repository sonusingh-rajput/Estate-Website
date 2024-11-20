import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
    const [showMobileMenu , SetShowMobileMenu] = useState(false)
  return (
    <div className="w-full  absolute top-0 left-0 z-10">
      <div className=" container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#header" className="cursor-pointer hover:text-gray-200">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-200">
            About
          </a>
          <a href="#Project" className="cursor-pointer hover:text-gray-200">
            Projects
          </a>
          <a href="#Testimonial" className="cursor-pointer hover:text-gray-200">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full text-black">
          Sign Up
        </button>
        <img onClick={() => SetShowMobileMenu(true)}  src={assets.menu_icon} alt="menu" className={`md:hidden w-7 cursor-pointer`} />
      </div>
      {/* -------------- Mobile Nav Menu-------------*/}
      <div onClick={() => SetShowMobileMenu(false)}  className={`md:hidden ${showMobileMenu ? "w-full fixed":"h-0 w-0" } cursor-pointer  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-500`}>
      <div className="flex justify-end p-6">
      <img src={assets.cross_icon} alt="cross" className="size-6 cursor-pointer" />
      </div>
      <ul className="flex flex-col items-center gap-2 mt-16 font-medium text-lg h-screen">
          <a onClick={() => SetShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
          <a onClick={() => SetShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
          <a onClick={() => SetShowMobileMenu(false)} href="#Project" className="px-4 py-2 rounded-full inline-block">Projects</a>
          <a onClick={() => SetShowMobileMenu(false)} href="#Testimonial" className="px-4 py-2 rounded-full inline-block">Testimonials</a>
      </ul>
   </div>
    </div>
  );
};

export default Navbar;
