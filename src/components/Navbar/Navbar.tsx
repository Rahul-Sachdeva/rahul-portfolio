"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { DiGoogleAnalytics } from "react-icons/di";
import { TbWorld } from "react-icons/tb";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  link: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, link, isActive }) => {
  return (
    <li className="w-full">
      <a
        href={link}
        className={`flex items-center space-x-4 px-6 py-4 text-lg font-semibold transition-all duration-300 rounded-lg 
        ${isActive ? "border border-white bg-gray-800" : "hover:bg-gray-700"}`}
      >
        <span className="text-xl">{icon}</span>
        <span className="text-lg">{label}</span>
      </a>
    </li>
  );
};

const Sidebar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <div className="h-screen w-[300px] bg-[#151030] text-white flex flex-col items-center py-6 shadow-lg">
      {/* Profile */}
      <div className="text-xl">&lt;Rahul Sachdeva /&gt;</div>
      <img src="/profile.png" alt="Profile" className="object-cover" />

      {/* Navigation */}
      <nav className="w-full">
        <ul className="flex flex-col w-full">
          <NavItem icon={<FaHome size={29}/>} label="Home" link="/" isActive={currentPath === "/"} />
          <NavItem icon={<GiAchievement size={32}/>} label="Achievements" link="/achievements" isActive={currentPath === "/achievements"} />
          <NavItem icon={<TbWorld size={30}/>} label="Projects" link="/projects" isActive={currentPath === "/projects"} />
          <NavItem icon={<FaBriefcase size={25} />} label="Resume" link="/resume" isActive={currentPath === "/resume"} />
          <NavItem icon={<FaEnvelope size={25} />} label="Contact" link="/contact" isActive={currentPath === "/contact"} />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
