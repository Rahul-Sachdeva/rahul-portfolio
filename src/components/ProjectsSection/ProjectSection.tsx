"use client"; // Next.js 13+ App Router for client-side state

import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
  {
    title: "ChatFlow",
    description: "One-click solution for adding customizable chat support...",
    technologies: "Next.js, WebSocket, MongoDB, Tailwind",
    image: "/sample1.webp",
    link: "#",
  },
  {
    title: "AI Web Builder",
    description: "AI-driven platform to create dynamic websites...",
    technologies: "MERN Stack, Gemini API",
    image: "/sample2.webp",
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
    <div className="p-6">
      {/* Toggle Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLayout}
          className="px-4 py-2 bg-gray-700 text-white rounded-md transition hover:bg-gray-600"
        >
          Switch to {layout === "horizontal" ? "Vertical" : "Horizontal"}
        </button>
      </div>

      {/* Project Cards */}
      <div className={`grid gap-6 ${layout === "horizontal" ? "space-y-6" : "grid-cols-1 md:grid-cols-2"}`}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} layout={layout} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
