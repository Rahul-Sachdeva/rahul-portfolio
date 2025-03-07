"use client"; // Next.js 13+ App Router for client-side state

import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Contacts TNP",
    description:
      "A robust contact management system for the Training & Placement Cell with role-based access, CSV functionality, and mobile responsiveness. Actively used to eliminate duplicate records and streamline recruiter-student interactions.",
    technologies: "MERN Stack",
    image: "projects/contacts-tnp.png", 
    link: "#",
  },
  {
    title: "TNP Website",
    description:
      "The upcoming official T&P Cell hub featuring placement updates, job listings, student profiles, and admin analytics. Contributed to both frontend UI and backend API development, set to replace the existing website.",
    technologies: "Next.js, Prisma",
    image: "projects/tnp-website.png", 
    link: "#",
  },
  {
    title: "Fuzzy Search",
    description:
      "AI-powered criminal record management system built for Smart India Hackathon. Features advanced fuzzy matching for duplicate detection, voice-to-text transcription, and comprehensive analytics dashboard for efficient large-scale data retrieval.",
    technologies: "MERN Stack, Python",
    image: "projects/fuzzy-search.png", 
    link: "#",
  },
  {
    title: "Edustation",
    description:
      "AI-driven e-learning platform with intelligent course recommendations, real-time progress tracking, and interactive assistance. Includes PDF summarization and student engagement analytics, showcasing AI's potential in modern education.",
    technologies: "React, Firebase, AI Integrations",
    image: "projects/edustation.png", 
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Sleek, responsive portfolio showcasing projects and skills with smooth Framer Motion animations, projects gallery, blog section, and interactive resume. Continuously evolving with new features.",
    technologies: "Next.js, Tailwind CSS, Framer Motion",
    image: "projects/portfolio.png", 
    link: "#",
  },
  {
    title: "Club Hub",
    description:
      "Modern event platform for discovery, real-time updates, and seamless registration. Features intuitive admin dashboard for event management and high-performance FastAPI backend ensuring reliable operations.",
    technologies: "React, Python - Fast API",
    image: "projects/club-hub.png", 
    link: "#",
  },
  // {
  //   title: "Mystery Message",
  //   description:
  //     "Anonymous, encrypted messaging platform exploring real-time chat and security. Personal project focused on private communication with planned AI sentiment analysis and smart message suggestions.",
  //   technologies: "Next.js",
  //   image: "", 
  //   link: "#",
  // },
  {
    title: "Sports Management System",
    description:
      "First hackathon project streamlining sports event registration with role-based access for result updates and scheduling. Includes results archive, gallery, and real-time notifications.",
    technologies: "HTML, CSS, JS, Node JS, MySQL",
    image: "projects/sports.png", 
    link: "#",
  },
  {
    title: "Search Cart",
    description:
      "Smart marketplace where users find nearby products based on distance, price, and availability. Features shop owner inventory management, sales analytics, and dynamic location-based searching via Leaflet.js.",
    technologies: "HTML, CSS, JS, Node JS, MongoDB, Leaflet",
    image: "projects/search-cart.png", 
    link: "#",
  },
  {
    title: "Mini Projects",
    description:
      "Collection of engaging interactive tools including To-Do List, Book Management System, Typing Test, Ball in a Circle, Tic-Tac-Toe, Sliding Puzzle etc. Demonstrates core development skills while enhancing user engagement through fun, practical applications.",
    technologies: "HTML, CSS, JS, MERN Stack",
    image: "projects/mini-projects.png", 
    link: "#",
  },
];

const ProjectsSection = () => {
  const [layout, setLayout] = useState<"horizontal" | "vertical">("horizontal");

  // Load preference from localStorage
  useEffect(() => {
    const savedLayout = localStorage.getItem("projectLayout") as "horizontal" | "vertical";
    if (savedLayout) setLayout(savedLayout);
  }, []);

  // Save preference to localStorage
  const toggleLayout = () => {
    const newLayout = layout === "horizontal" ? "vertical" : "horizontal";
    setLayout(newLayout);
    localStorage.setItem("projectLayout", newLayout);
  };

  return (
    <motion.div id="projects" className="p-6 z-20 w-[90%] flex flex-col justify-center ">
      {/* Toggle Button */}
      <motion.h1
        className="text-4xl font-extrabold mb-10 text-center text-[#8A2BE2]"
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Projects
      </motion.h1>

      <span className="flex justify-end mb-4">
        <button
          onClick={toggleLayout}
          className="px-4 py-2 bg-gray-700 text-white rounded-md transition hover:bg-gray-600"
        >
          Switch to {layout === "horizontal" ? "Vertical" : "Horizontal"} Cards
        </button>
      </span>

      {/* Project Cards */}
      {
      <div
        className={`grid gap-6 ${layout === "horizontal" ? "space-y-6" : "grid-cols-1 md:grid-cols-2"}`}
      >
        {projects.map((project, index) => {
          const isLastSingleItem = layout==="vertical" && projects.length % 2 !== 0 && index === projects.length - 1;
          return <ProjectCard key={index} {...project} layout={layout} extraClass={isLastSingleItem ? "md:col-span-2 mx-auto" : ""} />;
        })}
      </div>
      }
    </motion.div>
  );
};

export default ProjectsSection;
