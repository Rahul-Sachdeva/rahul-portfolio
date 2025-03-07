import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: "project1",
    title: "Contacts TNP",
    description: "A contact management system for T&P Cell with role-based access and CSV functionality.",
    imageUrl: "projects/contacts-tnp-mobile.png",
    link: "#",
  },
  {
    id: "project2",
    title: "TNP Website",
    description: "An upcoming official T&P Cell hub featuring placement updates, job listings, and student profiles.",
    imageUrl: "projects/tnp-website-mobile.png",
    link: "#",
  },
  {
    id: "project3",
    title: "Fuzzy Search",
    description: "An AI-powered criminal record system with fuzzy matching, voice-to-text, and data analytics.",
    imageUrl: "projects/fuzzy-search-mobile.png",
    link: "#",
  },
  {
    id: "project4",
    title: "Edustation",
    description: "An AI-driven e-learning platform with smart recommendations and real-time progress tracking.",
    imageUrl: "projects/edustation-mobile.png",
    link: "#",
  },
  {
    id: "project5",
    title: "Portfolio",
    description: "A sleek portfolio with animations, project showcase, achievements, and interactive resume.",
    imageUrl: "projects/portfolio-mobile.png",
    link: "#",
  },
  {
    id: "project6",
    title: "Club Hub",
    description: "An event platform for real-time updates, registration, and an admin dashboard.",
    imageUrl: "projects/club-hub-mobile.png",
    link: "#",
  },
];



const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const ProjectsSlide = () => {
  useEffect(() => {
      AOS.init({ duration: 800 }); // Initialize AOS for scroll animations
    }, []);
  return (
    <div className="w-full max-w-5xl mt-16 mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects 🚀
      </motion.h2>
      <div className="py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(project.id)}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-52 object-fill transition-transform duration-300 transform group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <motion.span
                  className="inline-block bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  View Project
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll to Projects Button */}
      <div className="flex justify-center mt-12">
        <Link href="#projects" passHref>
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            View All Projects
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSlide;
