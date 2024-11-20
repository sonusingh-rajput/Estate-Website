import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className=" min-h-screen w-full mb-4 bg-cover bg-center flex items-center overflow-hidden"
      style={{ backgroundImage: "url('./header_img.png')" }}
      id="header"
    >
      <Navbar />
      <div className=" container mx-auto text-center text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] max-w-4xl inline-block p-20 font-semibold">Explore home that fit your Dreams</h2>
        <div>
          <a className="bg-transparent border text-white px-8 py-3 rounded-md mr-8 " href="#Project">Projects</a>
          <a className="bg-blue-500 px-8 py-3 rounded-md" href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
