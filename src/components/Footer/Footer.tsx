"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

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
                    { label: "Skills + Projects", link: "projects" },
                    { label: "Resume", link: "resume" },
                    { label: "Contact", link: "contact" }
                ].map((item, index) => (
                    <Link
                        key={index}
                        href={`#${item.link}`}
                        className="hover:text-yellow-400 cursor-pointer hover:scale-110 transition-opacity duration-200 opacity-80 hover:opacity-100"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Social Icons */}
            <div className="flex space-x-6 text-xl mb-6">
                {[
                    { icon: <FaGithub />, link: "https://github.com/yourgithub" },
                    { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourlinkedin" },
                    { icon: <FaEnvelope />, link: "mailto:your.email@example.com" },
                    { icon: <SiLeetcode />, link: "https://leetcode.com/yourleetcode" },
                    { icon: <FaInstagram />, link: "https://leetcode.com/yourleetcode" }
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
