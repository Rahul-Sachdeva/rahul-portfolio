import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaHandsHelping, FaMedal } from 'react-icons/fa';

const achievements = [
  {
    title: 'Top Performer Award',
    description: 'Recognized as the top performer of the year for outstanding contributions.',
    icon: <FaAward className="text-yellow-500" />,
  },
  {
    title: 'Community Service',
    description: 'Led a community service project that benefited over 500 individuals.',
    icon: <FaHandsHelping className="text-green-500" />,
  },
  {
    title: 'Innovation Medal',
    description: 'Awarded for developing an innovative solution that increased efficiency by 30%.',
    icon: <FaMedal className="text-blue-500" />,
  },
];

const AchievementsContributionTeaser = () => {
  return (
    <div className="min-w-xl flex flex-col justify-center items-center bg-transparent text-white p-6">
      <h2 className="text-3xl font-bold mb-8">Achievements & Contributions</h2>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-6 mb-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="flex items-center p-4 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300"
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
      <GitHubContributionGraph />
      <LeetCodeStatsCard />
    </div>
  );
};

const GitHubContributionGraph = () => {
    return (
        <div className="w-full max-w-xl bg-transparent p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">GitHub Statistics</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
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
    <div className="w-full max-w-xl bg-transparent p-6">
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

export default AchievementsContributionTeaser;
