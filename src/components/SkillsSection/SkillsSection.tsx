"use client";
import React from "react";
import { motion } from "framer-motion";
import "./SkillsSection.css";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


interface Skill {
  icon: string;
  name: string;
}

const skills: Skill[] = [
  { icon: "/skills/c++.svg", name: "C++" },
  { icon: "/skills/css.png", name: "CSS" },
  { icon: "/skills/express.png", name: "Express" },
  { icon: "/skills/figma.png", name: "Figma" },
  { icon: "/skills/git.png", name: "Git" },
  { icon: "/skills/html.png", name: "HTML" },
  { icon: "/skills/javascript.png", name: "JavaScript" },
  { icon: "/skills/mongodb.png", name: "MongoDB" },
  { icon: "/skills/material-ui.png", name: "Material UI" },
  { icon: "/skills/mysql.png", name: "MySQL" },
  { icon: "/skills/nextjs.png", name: "NextJS" },
  { icon: "/skills/nodejs.png", name: "NodeJS" },
  { icon: "/skills/python.png", name: "Python" },
  { icon: "/skills/reactjs.png", name: "ReactJS" },
  { icon: "/skills/tailwind.png", name: "Tailwind CSS" },
  { icon: "/skills/typescript.png", name: "TypeScript" },
];

const softSkills: Skill[] = [
  { icon: "/skills/communication.jpg", name: "Communication" },
  { icon: "/skills/teamwork.png", name: "Teamwork" },
  { icon: "/skills/problem-solving.jpg", name: "Problem-Solving" },
  { icon: "/skills/leadership.webp", name: "Leadership" },
  { icon: "/skills/talent.png", name: "Creativity" },
  { icon: "/skills/time-management.jpg", name: "Time Management" },
  { icon: "/skills/critical-thinking.jpg", name: "Critical Thinking" },
  { icon: "/skills/designing.jpg", name: "UI-UX Designing" },
];

export default function SkillsSection() {
  return (
    <TooltipProvider>
      <motion.div
        id="skills"
        className="skills-container w-3/4 z-20 mx-auto flex flex-col justify-center text-white py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Skills Heading */}
        <motion.h1
          className="text-4xl font-extrabold mb-10 text-center text-[#8A2BE2]"
          animate={{ opacity: [0, 1], scale: [0.9, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Skills
        </motion.h1>

        {/* Programming Skills Section */}
        <motion.h2 className="text-3xl font-bold mb-6 neon-text text-left">
          &lt;Programming&gt;
        </motion.h2>

        <div className="mx-40 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-20 gap-y-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="hexagon-outer flex-center"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 174, 255, 0.75)" }}
            >
              <Tooltip>
                <TooltipTrigger>
                  <div className="hexagon flex-center text-blue-300 bg-[#2a1d4c]">
                    <Image src={skill.icon} alt={skill.name} width={70} height={70} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>

        <motion.h2 className="text-3xl font-bold mt-6 neon-text text-right">
          &lt;/Programming&gt;
        </motion.h2>

        {/* Additional Skills Section */}
        <motion.h2 className="text-3xl font-bold mt-10 neon-text text-left">
          &lt;SoftSkills&gt;
        </motion.h2>

        <div className="mx-40 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-20 gap-y-5">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="hexagon-outer flex-center"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 174, 255, 0.75)" }}
            >
              <Tooltip>
                <TooltipTrigger>
                  <div className="hexagon flex-center text-blue-300 bg-[#2a1d4c]">
                    <Image src={skill.icon} alt={skill.name} width={70} height={70} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>

        <motion.h2 className="text-3xl font-bold mt-6 neon-text text-right">
          &lt;/SoftSkills&gt;
        </motion.h2>
      </motion.div>
    </TooltipProvider>
  );
}
