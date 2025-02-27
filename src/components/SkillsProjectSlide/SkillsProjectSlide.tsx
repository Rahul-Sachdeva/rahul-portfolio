import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind CSS', level: 75 },
  { name: 'GraphQL', level: 70 },
];

const projects = [
    {
      title: 'Innovative Web Application',
      description: 'A cutting-edge web app that streamlines workflow management.',
      imageUrl: '/sample1.webp',
      link: '/projects/innovative-web-app',
    },
    {
      title: 'Mobile Solution',
      description: 'A mobile app that revolutionizes personal finance tracking.',
      imageUrl: '/sample2.webp',
      link: '/projects/mobile-solution',
    },
    {
      title: 'E-commerce Platform',
      description: 'A scalable e-commerce platform with seamless user experience.',
      imageUrl: '/sample3.webp',
      link: '/projects/e-commerce-platform',
    },
  ];

const SkillsProjectsSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white p-6">
      <h2 className="text-3xl font-bold mb-8">Skills & Projects</h2>

      <div className="w-full max-w-3xl">
        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
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
        </div>

        {/* Projects Section */}
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <span className="inline-block bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-full">
                  View Project
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      </div>
    </div>
  );
};

export default SkillsProjectsSection;
