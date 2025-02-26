import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  image: string;
  link: string;
  layout: "horizontal" | "vertical";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  link,
  layout,
}) => {
  return (
    <div
      className={`transition-all duration-500 rounded-lg shadow-md p-4 bg-gray-900 text-white 
      ${layout === "horizontal" ? "flex gap-4 items-center" : "flex flex-col text-center"}`}
    >
      <img
        src={image}
        alt={title}
        className={`rounded-lg object-cover ${layout === "horizontal" ? "w-1/3" : "w-full"}`}
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <p className="text-sm text-blue-400">{technologies}</p>
        <a
          href={link}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md inline-block"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
