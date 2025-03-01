import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const educationData = [
  {
    institution: "Guru Nanak Dev Engineering College, Ludhiana",
    year: "2022 — 2026",
    degree: "B.Tech in Computer Science and Engineering",
    details: [
      { label: "CGPA", value: "9.4/10 (upto the 5th semester)" },
      { label: "Relevant Coursework", value: "OOP, DSA, OS, CN, DBMS, SE, DE, ML"}
    ]
  },
  {
    institution: "St. Thomas Sr. Sec. School, Ludhiana",
    year: "2022",
    degree: "Senior Secondary",
    details: [
      { label: "Percentage", value: "97.6 %" },
      { label: "JEE Mains", value: "98.4 %ile" },
    ]
  },
  {
    institution: "St. Thomas Sr. Sec. School, Ludhiana",
    year: "2020",
    degree: "Matriculation",
    details: [
      { label: "Percentage", value: "91 %" }
    ]
  }
];

const Education = () => {
  
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS for scroll animations
  }, []);
  
  return (
    <section className="max-w-3xl mx-auto p-6 text-white mt-12">
      {/* Title */}
      <h2 className="text-2xl font-bold flex items-center mb-6 text-glow" data-aos="fade-down">
        <FaGraduationCap className="mr-2 text-yellow-400 animate-pulse" />
        Education
      </h2>

      {/* Timeline Container */}
      <div className="border-l-4 border-yellow-400 pl-6 space-y-8 relative">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative ml-2 bg-gray-900/40 p-4 rounded-lg shadow-md border border-gray-700 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {/* Glowing dot */}
            <div className="absolute -left-6 top-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>

            {/* Institution */}
            <h3 className="font-semibold text-lg text-yellow-300">{edu.institution}</h3>
            <p className="text-yellow-400 text-sm">{edu.year}</p>

            {/* Degree */}
            <p className="font-medium mt-1 text-white">{edu.degree}</p>

            {/* Details */}
            <ul className="text-gray-300 text-sm mt-2 space-y-1">
              {edu.details.map((detail, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="font-semibold text-yellow-300">{detail.label}:</span>
                  <span className="ml-2">{detail.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
