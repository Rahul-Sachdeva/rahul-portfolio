"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            setShowScroll(window.scrollY > 100);
        };
        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, []);

    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-t from-gray-900 to-gray-800 text-white py-8 px-4 text-center flex flex-col items-center shadow-lg"
        >
            {/* Navigation Links */}
            <nav className="w-full z-30 flex flex-wrap justify-center gap-6 text-sm font-medium mb-6">
                {
                [
                    { label: "Home", link: "" },
                    { label: "Achievements", link: "achievements" },
                    { label: "Skills + Projects", link: "projects" },
                    { label: "Resume", link: "resume" },
                    { label: "Contact", link: "contact" }
                ].map((item, index) => (
                    <Link
                        key={index}
                        href={`//${item.link}`}
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

            {/* Back to Top Button */}
            {showScroll && (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-6 right-6 bg-yellow-400 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all animate-bounce"
                >
                    <FaArrowUp className="text-gray-900 text-lg" />
                </motion.button>
            )}
        </motion.footer>
    );
}
