import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fullStack from '../../assets/fullstack.jpg';
import UIUX from '../../assets/uiux.jpg';
import Graphic from '../../assets/graphic.jpg';
import Data from '../../assets/data.jpg';


const qualifications = [
  {
    title: "Full-Stack Development",
    description: "Building robust and scalable web applications",
    image: fullStack,
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly and modern interfaces",
    image: UIUX,
  },
  {
    title: "Graphic Designing",
    description: "Creating visually appealing digital graphics",
    image: Graphic,
  },
  {
    title: "Data Analytics",
    description: "Analyzing data for actionable insights",
    image: Data,
  },
];

export const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % qualifications.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + qualifications.length) % qualifications.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % qualifications.length);
  };

  return (
    
    <div id="about" className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-150 overflow-hidden">
      {/* Slides */}
      <AnimatePresence>
        {qualifications.map(
          (qual, i) =>
            i === index && (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${qual.image})` }}
              >
                <div className="bg-[rgba(10,10,10,0.8)] p-8 rounded-xl text-center text-white max-w-full mx-4">
                  <h2 className="text-5xl md:text-6xl font-bold mb-4">{qual.title}</h2>
                  <p className="text-lg md:text-xl">{qual.description}</p>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Side Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-[rgba(10,10,10,0.1)]  hover:bg-[rgba(10,10,10,0.7)] text-white p-3 rounded-xl shadow-lg transition"
      >
        &#10094; {/* Left arrow */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-[rgba(10,10,10,0.1)] hover:bg-[rgba(10,10,10,0.7)] text-white p-3 rounded-xl shadow-lg transition"
      >
        &#10095; 
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        {qualifications.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-white scale-125" : "bg-gray-400 hover:bg-white hover:scale-110"
            }`}
          ></div>
        ))}
      </div>
      </div>
    </div>
  );
};
