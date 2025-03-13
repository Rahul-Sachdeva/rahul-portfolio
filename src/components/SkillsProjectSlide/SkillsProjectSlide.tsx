import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: 'DSA in C++', level: 100 },
  { name: 'React JS', level: 100 },
  { name: 'Node JS', level: 100 },
  { name: 'Next JS', level: 100 },
  { name: 'TypeScript', level: 100 },
  { name: 'MySQL', level: 100 },
  { name: 'Mongo DB', level: 100 },
  { name: 'Teamwork', level: 100 },
  { name: 'Leadership', level: 100 },
  { name: 'Computer Science', level: 100 },
];

const SkillsProjectsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS for scroll animations
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="min-w-full md:min-h-screen flex flex-col items-center md:mt-12 bg-transparent text-white p-6">
      <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-down">
        Skills
      </h2>
        {/* Skills Section */}
      <div className="w-full max-w-3xl">
        <div className="mb-12">
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-yellow-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 w-full flex justify-center">
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-transform transform hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                onClick={() => scrollToSection("skills")}
              >
                View All Skills
              </motion.button>
          </div>
        </div>
      
        {/* Projects Section */}
      </div>
    </div>
  );
};

export default SkillsProjectsSection;
