import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Innovative Web Application",
    description: "A cutting-edge web app that streamlines workflow management.",
    imageUrl: "/sample1.webp",
    link: "/projects/innovative-web-app",
  },
  {
    title: "Mobile Solution",
    description: "A mobile app that revolutionizes personal finance tracking.",
    imageUrl: "/sample2.webp",
    link: "/projects/mobile-solution",
  },
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with seamless user experience.",
    imageUrl: "/sample3.webp",
    link: "/projects/e-commerce-platform",
  },
];

const ProjectsSlide: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mt-16">
      <motion.h2
        className="text-3xl font-bold mb-12 text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <motion.span
                  className="inline-block bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  View Project
                </motion.span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSlide;
