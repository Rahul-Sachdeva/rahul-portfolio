"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full bg-[#151030] border-t border-white z-20 text-white py-8 px-4 text-center flex flex-col items-center shadow-lg"
        >
            {/* Navigation Links */}
            <nav className="w-full z-30 flex flex-wrap justify-center gap-6 text-sm font-medium mb-6">
                {
                [
                    { label: "Home", link: "home" },
                    { label: "Achievements", link: "achievements" },
                    { label: "Skills", link: "skills" },
                    { label: "Projects", link: "projects" },
                    { label: "Resume", link: "resume" },
                    { label: "Contributions", link: "contributions" },
                    { label: "Contact", link: "contact" }
                ].map((item, index) => (
                    <a
                        key={index}
                        className="hover:text-yellow-400 cursor-pointer hover:scale-110 transition-opacity duration-200 opacity-80 hover:opacity-100"
                        onClick={() => scrollToSection(item.link)}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* Social Icons */}
            <div className="flex space-x-6 text-xl mb-6">
                {[
                    { icon: <FaGithub />, link: "https://github.com/Rahul-Sachdeva" },
                    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rahul-sachdeva-961862247" },
                    { icon: <FaEnvelope />, link: "mailto:rahulsachdeva112005@gmail.com" },
                    { icon: <SiLeetcode />, link: "https://leetcode.com/u/Rahul_Sachdeva" },
                    { icon: <FaInstagram />, link: "https://www.instagram.com/rahul_sachdeva_0001" }
                ].map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-110 hover:text-yellow-400"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* Tagline & Copyright */}
            <p className="text-sm hover:opacity-100 text-white opacity-80 mb-2">Ideas to Reality, One Line of Code at a Time. 🚀</p>
            <p className="text-xs hover:opacity-100 opacity-80">© {new Date().getFullYear()} Rahul Sachdeva. All Rights Reserved.</p>
        </motion.footer>
    );
}
