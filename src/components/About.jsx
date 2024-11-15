import React from "react";
import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <div id="About" className="container mx-auto flex justify-center items-center flex-col  p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-3xl lg:text-4xl font-bold">
        About{" "}
        <span className="font-light underline decoration-1 underline-offset-4  ">
          Our Brand
        </span>{" "}
      </h1>
      <p className=" max-w-80 text-center text-gray-600 mt-4">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="container mx-auto md:flex justify-center items-center gap-20 my-10">
        <img src={assets.brand_img} className="w-full md:w-1/2 lg:w-2/5 mb-10 md:mb-0" />
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-10">
          <div className="flex gap-20 justify-center">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-3xl font-semibold ">10+</h2>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold ">12+</h2>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-3xl font-semibold ">20+</h2>
                <p className="text-gray-600">Mn.Sq.Ft. Delivered</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold ">25+</h2>
                <p className="text-gray-600">Ongoing Projects</p>
              </div>
            </div>
          </div>
          <p className="max-w-xl md:w-full text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="px-8 py-2 bg-blue-600 text-white rounded text-center">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
