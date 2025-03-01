import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  details: string[];
  logo?: string;
}

const experienceData: ExperienceItem[] = [
  {
    company: "Training and Placement Cell, GNDEC",
    role: "Technical Member",
    duration: "Jun. 2023 – Present",
    details: [
      "Developed a new version of the TNP website using Next.js for improved performance and scalability.",
      "Designed and implemented a Contact Management Portal to streamline research and calling operations for company outreach.",
      "Integrated Role-Based Access Control (RBAC) to manage permissions for different user roles efficiently.",
      "Optimized database queries and structured API endpoints to enhance data retrieval and user experience.",
      "Collaborated with team members to ensure seamless deployment and maintenance of the portal.",
    ],
    logo: "/tnplogo.png",
  },
];

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExperience = experienceData[selectedIndex];

  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS for scroll animations
  }, []);

  return (
    <section className="max-w-xl mx-auto mt-12 p-6 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-down">
        Experience
      </h2>

      {/* Horizontal Navbar for Multiple Experiences */}
      {experienceData.length && (
        <div
          className="flex justify-center overflow-x-auto bg-[#2a1d4c] space-x-4 p-3 rounded-lg mb-4"
          data-aos="fade-up"
        >
          {experienceData.map((exp, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all transform ${
                index === selectedIndex
                  ? "bg-purple-700 text-white scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white hover:scale-105"
              }`}
            >
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div className="text-left">
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-sm">{exp.company}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div
        className="p-6 bg-[#2a1d4c] rounded-xl transition-opacity duration-500 ease-in-out"
        key={selectedExperience.company}
        data-aos="fade-up"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">{selectedExperience.role}</h3>
            <p className="text-gray-400">{selectedExperience.company}</p>
            <p className="text-sm text-gray-400 mt-1">
              {selectedExperience.duration}
            </p>
          </div>
          {selectedExperience.logo && (
            <img
              src={selectedExperience.logo}
              alt={selectedExperience.company}
              className="w-16 h-16 rounded-full"
            />
          )}
        </div>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          {selectedExperience.details.map((detail, index) => (
            <li key={index} className="transition-all hover:translate-x-1">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
