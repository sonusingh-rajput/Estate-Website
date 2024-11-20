import React from 'react'
import { assets, testimonialsData } from "../assets/assets.js";

const Testimonial = () => {
  return (
    <div id="Testimonial" className="xl:h-screen container mx-auto flex justify-center items-center flex-col  p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-2xl lg:text-4xl font-bold">
      Customer{" "}
        <span className="font-light underline decoration-1 underline-offset-4  ">
        Testimonials
        </span>{" "}
      </h1>
      <p className=" max-w-80 text-center text-gray-600 mt-4">
      Real Stories from Those Who Found Home with Us
      </p>
      <div className=' container mx-auto mt-10 md:mt-16 flex gap-10 flex-col lg:flex-row'>
      {testimonialsData.map((project,index) => (
        <div className='w-full lg:w-2/6 flex flex-col items-center border shadow-md p-10 lg:p-0 lg:py-10 rounded'>
            <img className='w-20 h-20 rounded-full' src={project.image} />
            <h4 className='text-xl font-semibold mt-5 text-center'>{project.name}</h4>
            <p className='text-gray-600 text-sm mb-2'>{project.title}</p>
            <div className='mb-5 flex gap-1'>{Array.from({length: project.rating} , (item,index)=> (
                <img key={index} src={assets.star_icon} />
            ))}</div>
            <p className='text-center w-3/4 lg:w-3/5 text-gray-500'>{project.text}</p>
        </div>
      ))}
        
      </div>
    </div>
  )
}

export default Testimonial