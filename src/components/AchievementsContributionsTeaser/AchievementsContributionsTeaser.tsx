import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGraduationCap, FaHandsHelping, FaLaptopCode, FaLightbulb, FaMedal, FaTrophy } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const achievements = [
  {
    title: "LeetCode Achievements",
    description: "Solved 450+ questions with a 1700+ contest rating, earning top LeetCode badges.",
    icon: <FaLaptopCode className="text-yellow-500" />,
  },
  {
    title: "2nd Place - CTU Ideathon",
    description: "Secured 2nd position at CT University Ideathon for an innovative project.",
    icon: <FaLightbulb className="text-green-500" />,
  },
  {
    title: "Hackathon Competitor",
    description: "Participated in national and regional hackathons like SIH, HackTU 6.0, and Hack-n-Win.",
    icon: <FaAward className="text-blue-500" />,
  },
  {
    title: "1st Prize - Quizpedia",
    description: "Won the Quizpedia event at Tech Urja, an intercollege technical competition.",
    icon: <FaTrophy className="text-red-500" />,
  },
];

const AchievementsContributionTeaser = () => {
  useEffect(() => {
      AOS.init({ duration: 800 }); // Initialize AOS for scroll animations
    }, []);
  return (
    <div className="w-[95%] mt-12 flex flex-col justify-center items-center bg-transparent text-white p-6">
      <h2 className="text-2xl font-bold flex items-center mb-6 text-glow" data-aos="fade-down">
        <FaGraduationCap className="mr-2 text-yellow-400 animate-pulse" />
        Achievements
      </h2>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-6 mb-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="flex items-center p-4 bg-[#2a1d4c] bg-opacity-70 rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-4xl mr-4">
              {achievement.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Link href="#achievements" passHref>
        <motion.button
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          View All Achievements
        </motion.button>
      </Link>

    </div>
  );
};

export default AchievementsContributionTeaser;
