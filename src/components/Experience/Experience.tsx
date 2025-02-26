import { useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  details: string[];
  logo?: string;
}

const experienceData: ExperienceItem[] = [
  {
    company: "Canada's Wonderland",
    role: "IT Technician",
    duration: "Jun. 2023 – Present",
    details: [
      "Provisioned Windows PCs with MDT, and deployed scripting via PowerShell and ConnectWise.",
      "Managed AD accounts to propagate ACLs and unified access across in-house apps, Exchange, and SharePoint.",
      "Configured Cisco CUCM, Unity, and Finesse for stable call routing and voicemail services.",
      "Handled switch patching and VLAN/routing via PuTTY & SecureCRT, ensuring stable network performance.",
      "Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
    ],
    logo: "/wonderland.png",
  },
  {
    company: "Canada's Wonderland",
    role: "IT Technician",
    duration: "Jun. 2023 – Present",
    details: [
      "Provisioned Windows PCs with MDT, and deployed scripting via PowerShell and ConnectWise.",
      "Managed AD accounts to propagate ACLs and unified access across in-house apps, Exchange, and SharePoint.",
      "Configured Cisco CUCM, Unity, and Finesse for stable call routing and voicemail services.",
      "Handled switch patching and VLAN/routing via PuTTY & SecureCRT, ensuring stable network performance.",
      "Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
    ],
    logo: "/wonderland.png",
  },
  {
    company: "Mackenzie Health",
    role: "System Support Specialist",
    duration: "2022 – 2023",
    details: [
      "Supported IT operations by troubleshooting system issues and maintaining network infrastructure.",
      "Assisted in software deployment and security patch updates.",
      "Managed user accounts and access control policies.",
    ],
    logo: "/mackenzie.png",
  },
];

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExperience = experienceData[selectedIndex];

  return (
    <section className="max-w-xl mx-auto p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>

      {/* Horizontal Navbar for Multiple Experiences */}
      {experienceData.length > 1 && (
        <div className="flex overflow-x-auto space-x-4 bg-gray-900 p-3 rounded-lg mb-4">
          {experienceData.map((exp, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all whitespace-nowrap ${
                index === selectedIndex ? "bg-purple-700 text-white" : "bg-gray-800 text-gray-300"
              }`}
            >
              {exp.logo && <img src={exp.logo} alt={exp.company} className="w-8 h-8 rounded-full" />}
              <div className="text-left">
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-sm">{exp.company}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="bg-gray-900 p-6 rounded-xl">
        <h3 className="text-xl font-bold">{selectedExperience.role}</h3>
        <p className="text-gray-400">{selectedExperience.company}</p>
        <p className="text-sm text-gray-400 mt-1">{selectedExperience.duration}</p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          {selectedExperience.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
