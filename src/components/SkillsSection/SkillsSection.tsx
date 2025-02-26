import React, { ReactNode } from "react";
import { FaPython, FaJava, FaReact, FaDocker } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiPrisma } from "react-icons/si";
import './SkillsSection.css';

interface Skill{
    icon: ReactNode,
    name: string,
}

const skills:Skill[] = [
  { icon: <FaPython size={50} />, name: "Python" },
  { icon: <FaJava size={50} />, name: "Java" },
  { icon: <SiCplusplus size={50} />, name: "C++" },
  { icon: <SiJavascript size={50} />, name: "JavaScript" },
  { icon: <SiTypescript size={50} />, name: "TypeScript" },
  { icon: <FaDocker size={50} />, name: "Docker" },
  { icon: <SiTailwindcss size={50} />, name: "Tailwind CSS" },
  { icon: <FaReact size={50} />, name: "React" },
  { icon: <SiPostgresql size={50} />, name: "PostgreSQL" },
  { icon: <SiMongodb size={50} />, name: "MongoDB" },
  { icon: <SiPrisma size={50} />, name: "Prisma" },
];

export default function SkillsSection() {
  return (
    <div className="w-full flex flex-col justify-center text-white py-10">
      <h2 className="text-3xl font-bold mb-8 neon-text text-left">&lt;programming&gt;</h2>
      <div className="mx-40 grid grid-cols-4 !gap-x-1 gap-y-5 md:grid-cols-5 lg:grid-cols-5">
        {skills.map((skill, index) => (
        
          <div key={`outer-${index}`} className="hexagon-outer flex items-center justify-center">
            <div key={index} className="hexagon flex items-center justify-center text-blue-300">
                {skill.icon}
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mt-8 neon-text text-right">&lt;/programming&gt;</h2>
    </div>
  );
}
