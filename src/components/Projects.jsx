import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets.js";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToUpdate, setCardsToUpdate] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToUpdate(4); // Show 4 cards on larger screens
      } else {
        setCardsToUpdate(1); // Show 1 card on smaller screens
      }
    };

    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  return (
    <div className="container mx-auto flex justify-center items-center flex-col p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-3xl lg:text-4xl font-bold">
        Projects{" "}
        <span className="font-light underline decoration-1 underline-offset-4">
          Completed
        </span>{" "}
      </h1>
      <p className="max-w-80 text-center text-gray-600 mt-4">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className="container flex items-center justify-end mb-8">
        <div className="flex gap-2">
          <button
            onClick={prevProject}
            className="px-5 py-3 bg-gray-200 rounded hover:bg-gray-300 transition-all"
            aria-label="Previous Projects"
          >
            <img src={assets.left_arrow} alt="Previous" />
          </button>
          <button
            onClick={nextProject}
            className="px-5 py-3 bg-gray-200 rounded hover:bg-gray-300 transition-all"
            aria-label="Next Projects"
          >
            <img src={assets.right_arrow} alt="Next" />
          </button>
        </div>
      </div>

      {/* Projects Slider */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-8 transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToUpdate}%)`
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 ${
                cardsToUpdate === 1 ? "w-full" : "w-1/4"
              }`}
              style={{
                minWidth: cardsToUpdate === 1 ? "100%" : "25%", // Ensures each slide takes up full width on mobile
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="w-3/4 p-2 shadow bg-gray-100 absolute z-40 left-0 right-0 bottom-5 mx-auto">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <div className="text-gray-500">
                  <p>
                    {project.price} <span>|</span> {project.location}
                  </p>
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
