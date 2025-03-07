import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGraduationCap, FaHandsHelping, FaMedal } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import './ContributionsSlide.css'

const ContributionsSlide = () => {
  useEffect(() => {
      AOS.init({ duration: 800 }); // Initialize AOS for scroll animations
    }, []);
  return (
    <div className="w-[95%] mt-12 flex flex-col items-center bg-transparent text-white p-6">
      <h2 className="text-2xl font-bold flex items-center text-glow" data-aos="fade-down">
        <FaGraduationCap className="mr-2 text-yellow-400 animate-pulse" />
        Contributions
      </h2>
      <div className="example-container mt-6 w-full pr-6 h-[580px] overflow-y-scroll">
        <GitHubContributionGraph/>
        <LeetCodeStatsCard/>      
        {/* Scroll to Projects Button */}
        <div className="flex justify-center mt-12">
          <Link href="#contributions" passHref>
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              View Contribution Heatmaps
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const GitHubContributionGraph = () => {
    return (
        <div className="w-full max-w-xl bg-transparent mb-2">
          <h2 className="text-3xl font-bold mb-4">GitHub Statistics</h2>
          <div className="w-full overflow-hidden shadow-lg">
            <img
              src="https://github-readme-stats.vercel.app/api?username=rahul-sachdeva&show_icons=true&theme=radical"
              alt="GitHub Stats Card"
              className="w-full"
            />
          </div>
        </div>
      );
};
const LeetCodeStatsCard = () => {
  return (
    <div className="w-full max-w-xl bg-transparent pt-6">
      <h2 className="text-3xl font-bold mb-4">LeetCode Statistics</h2>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://leetcard.jacoblin.cool/rahul_sachdeva?theme=light&font=Karma&ext=heatmap"
          alt="LeetCode Stats Card"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ContributionsSlide;
