import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="w-full bg-blue-950 text-white mt-10">
      <div
        id="Footer"
        className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-5 p-5 sm:p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      >
        <div className="w-full sm:w-2/6 flex flex-col gap-4">
            <img src={assets.logo} className="w-2/6" />
            <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div className="w-full sm:w-2/6 flex flex-col justify-center sm:items-center gap-4" >
            <h4 className="text-2xl font-semibold">Company</h4>
            <div className="flex flex-col gap-2 text-gray-300" >
            <a href="#Home" >Home</a>
            <a href="#About" >About Us</a>
            <a href="#Contact" >Contact Us</a>
            <a href="#Home" >Privacy Policy</a>
            </div>
        </div>
        <div className="w-full sm:w-2/6 flex flex-col gap-4">
        <h4 className="text-2xl font-semibold">Subscribe to our newsletter</h4>
        <div >
            <p className="text-gray-300">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className="flex gap-5 mt-2">
                <input type="email" placeholder="Enter your email " className="px-4 py-2 rounded" />
                <button className="bg-blue-500 text-white px-8 py-3 rounded-md">Subscribe</button>
            </div>
        </div>
        </div>
      </div>
      <hr  className="p-1 mt-10 w-full container mx-auto text-gray-500"></hr>
      <div>
        <p className="text-center text-gray-500 py-8">Copyright © 2024 Flexiona. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
