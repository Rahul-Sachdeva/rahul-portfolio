import Footer from "@/components/Footer/Footer";
import GifCarousel from "@/components/Journey/Journey";
import ProjectsSection from "@/components/ProjectsSection/ProjectSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <GifCarousel/>
      <SkillsSection/>
      <ProjectsSection/>
      <Footer/>
    </div>
  );
}
