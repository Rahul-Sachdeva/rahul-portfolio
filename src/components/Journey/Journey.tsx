"use client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaBicycle } from "react-icons/fa"; // Import arrow icon
import "./Journey.css";
import Introduction from "../Introduction/Introduction";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import FutureGoals from "../FutureGoals/FutureGoals";
import SkillsProjectsSlide from "../SkillsProjectSlide/SkillsProjectSlide";
import { IoIosBicycle } from "react-icons/io";
import AchievementsContributionsTeaser from "../AchievementsContributionsTeaser/AchievementsContributionsTeaser";

const slides = [
  {content: <Introduction/>},
  {content: <Education/>},
  {content: <Experience/>},
  {content: <SkillsProjectsSlide/>},
  {content: <AchievementsContributionsTeaser/>},
  {content: <FutureGoals/>},
];

export default function GifCarousel() {
  const [index, setIndex] = useState(0);
  const [showGifs, setShowGifs] = useState(false);
  const [birdPaused, setBirdPaused] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return; // Prevent multiple clicks from resetting the timer
    setIsTransitioning(true);
    
    setShowGifs(true);
    setBirdPaused(false);
    
    setTimeout(() => {
      setShowGifs(false);
      setBirdPaused(true);
      setIsTransitioning(false);
    }, 5000); // Keep animation effect stable

    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleRadioClick = (slideIndex) => {
    if (slideIndex === index) return; // Avoid re-triggering animation if already on the same slide
    setIndex(slideIndex);
    setShowGifs(true);
    setBirdPaused(false);
    
    setTimeout(() => {
      setShowGifs(false);
      setBirdPaused(true);
    }, 5000);
  };

  return (
    <div className="relative ml-14 z-20 w-full h-screen flex justify-between">
      {/* Title and Description */}
      <div>
        {slides[index].content}
      </div>

      {/* Carousel */}
      <div className="flex flex-col justify-between mr-10 items-center z-20">
        <p className="text-[30px] flex">View My Journey (<IoIosBicycle size={45}/>)</p>
        <div className="relative w-[600px] h-[500px] border-2 border-white overflow-hidden rounded-[50px]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background */}
              <Image
                src={showGifs ? "/bg.gif":"/bg.jpg"}
                alt="Background"
                className="w-full h-full"
                width={0}
                height={0}
                sizes="100vw"              
              />

              {/* Cyclist */}
              <div className="absolute top-48 left-48">
                <Image
                  src={showGifs ? "/person.gif":"/person.png"}
                  alt="Cyclist"
                  width={300}
                  height={300}
                />
              </div>

              {/* Birds - Animation persists smoothly */}
              <div className={`absolute top-20 left-4 bird-animation ${birdPaused ? "" : "bird-paused"}`}>
                <Image src={"/bird1.gif"} alt="Bird 1" width={100} height={100} />
              </div>
              <div className={`absolute top-20 left-[400px] bird-animation2 ${birdPaused ? "" : "bird-paused2"}`}>
                <Image src={"/bird2.gif"} alt="Bird 2" width={100} height={100} />
              </div>
            </div>
          ))}
        </div>

        {/* Radio Buttons for Navigation */}
        <div className="flex mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleRadioClick(i)}
              className={`w-4 h-4 mx-2 rounded-full ${
                i === index ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>

        {/* Next Button with Icon */}
        <button
          onClick={handleNext}
          className="relative mt-2 bg-gray-800 text-white p-3 rounded-full"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
