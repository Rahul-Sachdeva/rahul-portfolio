"use client";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { FaHome, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
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
      <Link
        href={link}
        className={`flex items-center space-x-4 px-6 py-3 text-lg font-semibold transition-all duration-300 rounded-lg 
        ${isActive ? "border border-white bg-[#151030]" : "hover:bg-[#211540]"}`}
      >
        <span className="text-xl">{icon}</span>
        <span className="text-lg">{label}</span>
      </Link>
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
    <div className="h-[100vh] fixed max-h-screen w-[300px] bg-[#2a1d4c] text-white flex flex-col items-center shadow-lg">
      {/* Profile */}
      <div className="text-xl mt-4">&lt;Rahul Sachdeva /&gt;</div>
      <div className="w-60 h-[264px] mt-2 rounded-[30px] overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <img
          src="/rahul-sachdeva.png"
          alt="Rahul"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation */}
      <nav className="w-full mt-4">
        <ul className="flex flex-col mx-auto w-[80%] items-center justify-center">
          <NavItem
            icon={<FaHome size={29} />}
            label="Home"
            link="/"
            isActive={currentPath === "/"}
          />
          <NavItem
            icon={<GiAchievement size={32} />}
            label="Achievements"
            link="#achievements"
            isActive={currentPath === "#achievements"}
          />
          <NavItem
            icon={<TbWorld size={30} />}
            label="Skills"
            link="#skills"
            isActive={currentPath === "#skills"}
          />
          <NavItem
            icon={<TbWorld size={30} />}
            label="Projects"
            link="#projects"
            isActive={currentPath === "#projects"}
          />
          <NavItem
            icon={<FaBriefcase size={25} />}
            label="Resume"
            link="#resume"
            isActive={currentPath === "#resume"}
          />
          <NavItem
            icon={<FaBriefcase size={25} />}
            label="Contributions"
            link="#contributions"
            isActive={currentPath === "#contributions"}
          />
          <NavItem
            icon={<FaEnvelope size={25} />}
            label="Contact"
            link="#contact"
            isActive={currentPath === "/"}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
