"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { FaHome, FaBriefcase, FaEnvelope, FaGithub } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  sectionId: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, sectionId, isActive, onClick }) => {
  return (
    <li className="w-full">
      <button
        onClick={() => onClick(sectionId)}
        className={`flex items-center space-x-4 px-6 py-3 text-lg font-semibold transition-all duration-300 rounded-lg w-full text-left
        ${isActive ? "border border-white bg-[#151030]" : "hover:bg-[#211540]"}`}
      >
        <span className="text-xl">{icon}</span>
        <span className="text-lg">{label}</span>
      </button>
    </li>
  );
};


const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Function to scroll smoothly to the section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Detect which section is in view while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "achievements", "skills", "projects", "resume", "contributions", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[100vh] fixed max-h-screen w-[300px] bg-[#2a1d4c] text-white flex flex-col items-center shadow-lg">
      <div className="text-xl mt-4">&lt;Rahul Sachdeva /&gt;</div>
      <div className="w-60 h-[264px] mt-2 rounded-[30px] overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <img src="/rahul-sachdeva.png" alt="Rahul" className="w-full h-full object-cover" />
      </div>

      <nav className="w-full mt-4">
        <ul className="flex flex-col mx-auto w-[80%] items-center justify-center">
          <NavItem icon={<FaHome size={29} />} label="Home" sectionId="home" isActive={activeSection === "home"} onClick={scrollToSection} />
          <NavItem icon={<GiAchievement size={32} />} label="Achievements" sectionId="achievements" isActive={activeSection === "achievements"} onClick={scrollToSection} />
          <NavItem icon={<TbWorld size={30} />} label="Skills" sectionId="skills" isActive={activeSection === "skills"} onClick={scrollToSection} />
          <NavItem icon={<CgWebsite size={30} />} label="Projects" sectionId="projects" isActive={activeSection === "projects"} onClick={scrollToSection} />
          <NavItem icon={<FaBriefcase size={25} />} label="Resume" sectionId="resume" isActive={activeSection === "resume"} onClick={scrollToSection} />
          <NavItem icon={<FaGithub size={25} />} label="Contributions" sectionId="contributions" isActive={activeSection === "contributions"} onClick={scrollToSection} />
          <NavItem icon={<FaEnvelope size={25} />} label="Contact" sectionId="contact" isActive={activeSection === "contact"} onClick={scrollToSection} />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
