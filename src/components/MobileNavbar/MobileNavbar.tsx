"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { FaHome, FaBriefcase, FaEnvelope, FaGithub } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";

interface NavItemProps {
  icon: ReactNode;
  sectionId: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, sectionId, isActive, onClick }) => {
  return (
    <li>
      <button
        onClick={() => onClick(sectionId)}
        className={`text-white flex items-center space-x-4 px-2 py-1 text-lg font-semibold transition-all duration-300 rounded-lg text-left
        ${isActive ? "border border-white bg-[#151030]" : "hover:bg-[#211540]"}`}
      >
        <span className="text-xl">{icon}</span>
      </button>
    </li>
  );
};


const MobileNavbar: React.FC = () => {
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
      <nav className="w-full my-3">
        <ul className="flex items-center justify-evenly">
          <NavItem icon={<FaHome size={29} />} sectionId="home" isActive={activeSection === "home"} onClick={scrollToSection} />
          <NavItem icon={<GiAchievement size={32} />} sectionId="achievements" isActive={activeSection === "achievements"} onClick={scrollToSection} />
          <NavItem icon={<TbWorld size={30} />} sectionId="skills" isActive={activeSection === "skills"} onClick={scrollToSection} />
          <NavItem icon={<CgWebsite size={30} />} sectionId="projects" isActive={activeSection === "projects"} onClick={scrollToSection} />
          <NavItem icon={<FaBriefcase size={25} />} sectionId="resume" isActive={activeSection === "resume"} onClick={scrollToSection} />
          <NavItem icon={<FaGithub size={25} />} sectionId="contributions" isActive={activeSection === "contributions"} onClick={scrollToSection} />
          <NavItem icon={<FaEnvelope size={25} />} sectionId="contact" isActive={activeSection === "contact"} onClick={scrollToSection} />
        </ul>
      </nav>
  );
};

export default MobileNavbar;
