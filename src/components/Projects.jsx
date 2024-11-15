import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets.js";
const Projects = () => {

  const [currentIndex , setCurrentIndex] = useState(0);
  const [cardsToUpdate , setCardsToUpdate] = useState(1);

  const nextProject =() =>  {
    setCurrentIndex((pervIndex) => (pervIndex + 1) % projectsData.length)
  }

  const prevProject =() =>  {
    setCurrentIndex((pervIndex) => pervIndex === 0? projectsData.length - 1 : pervIndex - 1)
  }

  useEffect(() => {
    const updateCardsToShow = () => {
      if(window.innerHeight >= 1024){
        setCardsToUpdate(projectsData.length)
      }else {
        setCardsToUpdate(1)
      }
    };

    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  },[])

  return (
    <div className="container mx-auto flex justify-center items-center flex-col  p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-3xl lg:text-4xl font-bold">
        Projects{" "}
        <span className="font-light underline decoration-1 underline-offset-4  ">
          Completed
        </span>{" "}
      </h1>
      <p className="max-w-80 text-center text-gray-600 mt-4">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* Slider Button*/}

      <div className="container flex items-center justify-end  mb-8">
        <div className="flex gap-2">
          <button
          onClick={prevProject}
            className="px-5 py-3 bg-gray-200 rounded hover:bg-gray-300 transition-all"
            aria-level="Previous Projects"
          >
            <img src={assets.left_arrow} alt="Previous" />
          </button>
          <button
          onClick={nextProject}
            className="px-5 py-3 bg-gray-200 rounded hover:bg-gray-300 transition-all"
            aria-level="Next Projects"
          >
            <img src={assets.right_arrow} alt="Next" />
          </button>
        </div>
      </div>

      {/* Projects Slider */}

      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform ease-in-out duration-500"
        style={{transform:`translateX(-${(currentIndex * 100) / cardsToUpdate}%)`}}
        >
          {projectsData.map((project,index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={project.image} alt={project.title} />
              <div className="w-3/4 p-2 shadow bg-gray-100 absolute z-40 left-0 right-0 bottom-5">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <div className="text-gray-500">
                  <p>{project.price} <span>|</span> {project.location}</p>                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
