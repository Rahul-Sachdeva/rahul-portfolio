"use client"; // If using Next.js

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import Image from "next/image";
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
    title: "LeetCode Achievements",
    description: "Solved 450+ questions with a 1700+ contest rating, received many top leetcoder badges",
    date: "Ongoing",
    skills: ["Data Structures", "Problem Solving", "Optimal Thinking"],
    link: "https://drive.google.com/file/d/1EWdZfNn2dTn17F3GNi9-QxA14MofQLTD/view?usp=drive_link", // Google Drive link for hackathon certificates
    logo: "/skills/leetcode.png",
  },
  {
    title: "Hackathons",
    description: "Competed in National & Regional Hackathons like SIH, Hack-n-Win, HackTU 6.0, GNE Hackathon etc.",
    date: "Ongoing",
    skills: ["Rapid Prototyping", "Competitive Coding", "Teamwork & Leadership"],
    link: "https://drive.google.com/file/d/1vNKOgM4ROU1KTZp41bIiAOF0juYBfA7E/view?usp=drive_link",
    logo: "/skills/hackathon.png",
  },
  {
    title: "Best Overall Prize Workshop on Game Dev",
    description: "Awarded Best Overall Prize in a Peer-to-Peer Learning Event. Adventure Game using C# & Unity.",
    date: "2023",
    skills: ["Game Development", "Rapid Learning", "Creativity"],
    link: "https://drive.google.com/file/d/1S7MlBgFfr3pEppJI8EwI848NIFgdK9n4/view?usp=drive_link",
    logo: "/skills/unity.png",
  },
  {
    title: "Skill India Certification AI Training",
    description: "Certified by Ansh Infotech in Artificial Intelligence training.",
    date: "2024",
    skills: ["AI", "Machine Learning", "Deep Learning"],
    link: "https://drive.google.com/file/d/1YVjJTabFSJgb6_qoQVidYTdkG14rtuGh/view?usp=drive_link", // Certification link
    logo: "/skills/skill_india.jpg",
  },
  {
    title: "TNP Cell - Technical & Executive Member",
    description: "Organized Placement Activities and Made technical projects at Training and Placement Cell, GNDEC.",
    date: "2024-Present",
    skills: ["Leadership", "Communication", "Event Management"],
    link: "https://tnpgndec.com/executiveMembers",
    logo: "/tnplogo.png",
  },
  {
    title: "Ideathon - 2nd Place",
    description: "Secured overall Second position in the CT University Ideathon.",
    date: "2024",
    skills: ["Innovation", "Idea-Pitching", "Problem-Solving"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7194236097655132160?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0sSNkBcNfCycZ3CbC2AurD-Y5G_XKEDh8", // Add a drive link if needed
    logo: "/skills/ideathon.png",
  },
  {
    title: "1st Prize - Quizpedia (Tech Urja 2023)",
    description: "Won the Quizpedia event at Tech Urja, an intercollege competition.",
    date: "2023",
    skills: ["Critical Thinking", "Technical Knowledge", "Fast Decision Making"],
    link: "https://drive.google.com/file/d/1VF_xSO_ovV2YTC8lLNkecatEhitsu4hX/view?usp=drive_link",
    logo: "/first.png",
  },
  {
    title: "View All Achievements",
    description: "View all my Certifications including LeetCode Badges, Hackathons, Intercollege Event Certifications, and much more.",
    date: "Ongoing",
    skills: ["Competitions", "Problem Solving", "Teamwork"],
    link: "https://drive.google.com/drive/folders/11z7PH5bRh5a96CKs6eaUuZ4yh8pOz11E", // Google Drive link to grouped certificates
    logo: "/skills/prize.png",
  },
];

const Achievements = () => {
  return (
    <div id="achievements" className="w-[75%] mr-0 z-20 flex flex-col items-center">
    <div className="w-full flex flex-col justify-center items-center text-white py-12">
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
              className="bg-[#2a1d4c] flex flex-col justify-center rounded-2xl mt-8 mb-8 px-6 py-2 h-[400px] shadow-lg border border-gray-600 text-center"
            >
              <div className="flex justify-center items-center">
                <Image src={achievement.logo} alt="Logo" width={48} height={48} className="w-12 h-12 mb-4 rounded bg-white p-[2px]" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
              <p className="text-sm opacity-80">{achievement.description}</p>
              <p className="text-sm opacity-60 mb-4">{achievement.date}</p>
              <ul className="text-xs opacity-80 space-y-1">
                {achievement.skills.map((skill, i) => (
                  <li key={i}>• {skill}</li>
                ))}
              </ul>
              <a href={achievement.link} target="_blank" className="mt-4 inline-block bg-[#151030] px-4 py-2 rounded-lg text-sm">
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
