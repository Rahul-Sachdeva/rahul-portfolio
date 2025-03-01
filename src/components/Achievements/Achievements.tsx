"use client"; // If using Next.js

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, EffectFlip, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import ContributionSection from "@/components/ContributionSection/ContributionSection";
// import 'swiper/css/effect-flip';
// import 'swiper/css/navigation';


interface Achievement {
  title: string;
  description: string;
  date: string;
  skills: string[];
  link: string;
  logo: string;
}

const achievements: Achievement[] = [
  {
    title: "MongoDB Python Developer Path",
    description: "Proof of Completion",
    date: "Feb 2025",
    skills: ["PyMongo", "NoSQL", "Schema Design", "MongoDB Query Optimization"],
    link: "#",
    logo: "/mongodb-logo.png",
  },
  {
    title: "GitHub Foundations",
    description: "Professional Certificate",
    date: "Sep 2024 - Sep 2027",
    skills: ["Git", "CI/CD", "Repository Management", "SAP Workflow"],
    link: "#",
    logo: "/github-logo.png",
  },
  {
    title: "Certified Enterprise Scripting Architect",
    description: "Automation | Connective University",
    date: "Jul 2024",
    skills: ["PAM", "PowerShell", "Windows Server", "Enterprise Architecture"],
    link: "#",
    logo: "/scripting-logo.png",
  },
  {
    title: "MongoDB Python Developer Path",
    description: "Proof of Completion",
    date: "Feb 2025",
    skills: ["PyMongo", "NoSQL", "Schema Design", "MongoDB Query Optimization"],
    link: "#",
    logo: "/mongodb-logo.png",
  },
  {
    title: "GitHub Foundations",
    description: "Professional Certificate",
    date: "Sep 2024 - Sep 2027",
    skills: ["Git", "CI/CD", "Repository Management", "SAP Workflow"],
    link: "#",
    logo: "/github-logo.png",
  },
  {
    title: "Certified Enterprise Scripting Architect",
    description: "Automation | Connective University",
    date: "Jul 2024",
    skills: ["PAM", "PowerShell", "Windows Server", "Enterprise Architecture"],
    link: "#",
    logo: "/scripting-logo.png",
  },
];

const Achievements = () => {
  return (
    <div id="achievements" className="w-[75%] mr-0 z-20 flex flex-col items-center">
    <div className="w-full flex flex-col items-center text-white py-12">
      <h2 className="text-4xl font-bold mb-4">Achievements</h2>
        <style>
        {`
        .swiper-pagination-bullet{
            background: white !important; 
        }
        `}
        </style>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}  
        slidesPerView={3}
        coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false, // Disable slide shadows entirely
          }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper w-full max-w-5xl px-4"
      >
        {achievements.map((achievement, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.02}}
              transition={{ duration: 0.3 }}
              className="bg-[#2a1d4c] rounded-2xl mt-8 mb-8 p-6 h-[400px] shadow-lg border border-gray-600 text-center"
            >
              <div className="flex justify-center">
                <img src={achievement.logo} alt="Logo" className="w-12 h-12 mb-4" />
              </div>
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
              <p className="text-sm opacity-80">{achievement.description}</p>
              <p className="text-sm opacity-60 mb-4">{achievement.date}</p>
              <ul className="text-xs opacity-80 space-y-1">
                {achievement.skills.map((skill, i) => (
                  <li key={i}>• {skill}</li>
                ))}
              </ul>
              <a href={achievement.link} className="mt-4 inline-block bg-gray-800 px-4 py-2 rounded-lg text-sm">
                View Credential
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
        effect={'flip'}
        grabCursor={true}
        navigation={true}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, EffectFlip]}
        className="mySwiper w-[30%] px-4"
      >
        {achievements.map((achievement, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05}}
              transition={{ duration: 0.3 }}
              className="bg-[#1e1e2e] rounded-2xl p-6 shadow-lg border border-gray-600 text-center"
            >
              <div className="flex justify-center">
                <img src={achievement.logo} alt="Logo" className="w-12 h-12 mb-4" />
              </div>
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
              <p className="text-sm opacity-80">{achievement.description}</p>
              <p className="text-sm opacity-60 mb-4">{achievement.date}</p>
              <ul className="text-xs opacity-80 space-y-1">
                {achievement.skills.map((skill, i) => (
                  <li key={i}>• {skill}</li>
                ))}
              </ul>
              <a href={achievement.link} className="mt-4 inline-block bg-gray-800 px-4 py-2 rounded-lg text-sm">
                View Credential
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
    </div>
  );
};

export default Achievements;
