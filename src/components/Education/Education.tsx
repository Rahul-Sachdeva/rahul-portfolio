import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    institution: "Sardar Patel Institute Of Technology",
    year: "2022 — 2026",
    degree: "B.Tech in Electronics & Telecommunication",
    details: [
      { label: "CGPA", value: "8.69/10 (upto the 4th semester)" },
      { label: "Relevant Coursework", value: "Digital Electronics, Microprocessors, Microcontrollers, Computer Architecture, Analog Circuits" }
    ]
  },
  {
    institution: "SPJIMR",
    year: "2023 — 2026",
    degree: "Minors in Management",
    details: [
      { label: "Coursework", value: "Marketing, Finance, Operations, Strategy" }
    ]
  },
  {
    institution: "Pace Institute",
    year: "2020 — 2022",
    degree: "Maharashtra Board of Higher Secondary Education",
    details: [
      { label: "Percentage", value: "87.7%" }
    ]
  }
];

const Education = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 text-white">
      <h2 className="text-2xl font-bold flex items-center mb-6">
        <FaGraduationCap className="mr-2 text-yellow-400" />
        Education
      </h2>

      <div className="border-l-4 border-yellow-400 pl-6 space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-6 top-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
            <h3 className="font-semibold">{edu.institution}</h3>
            <p className="text-yellow-400 text-sm">{edu.year}</p>
            <p className="font-medium mt-1">{edu.degree}</p>
            <ul className="text-gray-300 text-sm mt-1 space-y-1">
              {edu.details.map((detail, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{detail.label}:</span> {detail.value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
