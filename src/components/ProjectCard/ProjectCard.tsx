import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  image: string;
  link: string;
  label: string;
  layout: "horizontal" | "vertical";
  extraClass?: string; // ✅ Added this
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  link,
  label,
  layout,
  extraClass = "", // ✅ Default to empty if not provided
}) => {
  return (
    <motion.div
      className={`transition-transform duration-500 border-2 border-yellow-500 rounded-lg shadow-md p-4 bg-gray-900 text-white ${
        layout === "horizontal" ? "flex gap-4 items-center" : "flex flex-col text-center"
      } ${extraClass}`} // ✅ Applied here
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src={image}
        alt={title}
        className={`rounded-lg object-fill ${
          layout === "horizontal" ? "w-1/3 h-[200px]" : "w-full h-[300px]"
        }`}
        whileHover={{ opacity: 0.8 }}
      />
      <div className="flex flex-col justify-center mt-4 md:mt-0">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        <p className="text-sm text-blue-400 mt-2">{technologies}</p>
        {link=="#"?
        <a
          href={link}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md inline-block hover:bg-blue-700 transition-colors"
        >
          {label}
        </a>
        :  
        <a
          href={link}
          target="_blank"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md inline-block hover:bg-blue-700 transition-colors"
        >
          {label}
        </a>
        }
      </div>
    </motion.div>
  );
};

export default ProjectCard;
