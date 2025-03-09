"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Introduction from "../Introduction/Introduction";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import FutureGoals from "../FutureGoals/FutureGoals";
import SkillsProjectsSlide from "../SkillsProjectSlide/SkillsProjectSlide";
import AchievementsContributionsTeaser from "../AchievementsContributionsTeaser/AchievementsContributionsTeaser";
import ProjectsSlide from "../ProjectsSlide/ProjectsSlide";
import ContributionsSlide from "../ContributionsSlide/ContributionsSlide";

const slides = [
  { content: <Introduction /> },
  { content: <Education /> },
  { content: <Experience /> },
  { content: <AchievementsContributionsTeaser /> },
  { content: <SkillsProjectsSlide /> },
  { content: <ProjectsSlide /> },
  { content: <ContributionsSlide/> },
  { content: <FutureGoals /> },
];

export default function GifCarousel() {
  const [index, setIndex] = useState(0);
  const [showGifs, setShowGifs] = useState(false);
  const [birdPaused, setBirdPaused] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isTransitioning) return;
    setIsTransitioning(true);
    setShowGifs(true);
    setBirdPaused(false);

    setTimeout(() => {
      setShowGifs(false);
      setBirdPaused(true);
      setIsTransitioning(false);
    }, 4000);

    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleRadioClick = (slideIndex:number) => {
    if (isTransitioning) return;
    if (slideIndex === index) return;
    setIsTransitioning(true);
    setShowGifs(true);
    setBirdPaused(false);
    
    setTimeout(() => {
      setShowGifs(false);
      setBirdPaused(true);
      setIsTransitioning(false);
    }, 4000);
    setIndex(slideIndex);
  };

  return (
    <>
    <div
      id="home"
      className="relative ml-14 z-20 w-full h-screen flex justify-between"
    >
      {/* Title and Description */}
      <div className="w-full">{slides[index].content}</div>

      {/* Carousel */}
      <div className="flex flex-col justify-center mt-4 mr-10 items-center z-20">
        <h2 className="text-2xl text-white mb-5 font-bold flex items-center text-glow">
          Explore My Journey{" "}
          <IoIosBicycle size={40} className="ml-1 text-white animate-pulse" />
        </h2>
        <div className="relative w-[600px] h-[530px] border-2 border-white overflow-hidden rounded-[50px]">
          <AnimatePresence>
            {/* Next Button with Icon */}
            <button
              onClick={handleNext}
              className="absolute z-30 top-[50%] p-3 left-10 bg-[#151030] text-white rounded-full hover:bg-gray-700 transition-all"
            >
              <FaArrowRight size={24} />
            </button>
            {slides.map((slide, i) => (
              <motion.div
                key={i}
                className={`absolute inset-0 ${
                  i === index ? "block" : "hidden"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Background */}
                <Image
                  src={showGifs ? "/bg.gif" : "/bg.jpg"}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                />

                {/* Cyclist */}
                <div className="absolute top-48 left-48">
                  <Image
                    src={showGifs ? "/person.gif" : "/person.png"}
                    alt="Cyclist"
                    width={300}
                    height={300}
                  />
                </div>

                {/* Birds - Animation persists smoothly */}
              <div className={`absolute top-20 left-4 ${birdPaused ? "bird-animation" : "bird-paused"}`}>
                <Image src={"/bird1.gif"} alt="Bird 1" width={100} height={100} />
              </div>
              <div className={`absolute top-20 left-[400px] ${birdPaused ? "bird-animation2" : "bird-paused2"}`}>
                <Image src={"/bird2.gif"} alt="Bird 2" width={100} height={100} />
              </div>
            
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Radio Buttons for Navigation */}
        <div className="flex pt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleRadioClick(i)}
              className={`w-6 h-2 mx-2 rounded-full ${
                i === index ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>

    </div>
    {/* Back to Top Button */}
    {showScroll && (
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 z-50 right-6 bg-yellow-400 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all animate-bounce"
      >
        <FaArrowUp className="text-gray-900 text-lg" />
      </motion.button>
    )}
    </>
  );
}
