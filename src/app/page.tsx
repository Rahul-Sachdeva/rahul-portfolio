import Achievements from "@/components/Achievements/Achievements";
import Contact from "@/components/Contact/Contact";
import ContributionSection from "@/components/ContributionSection/ContributionSection";
import Footer from "@/components/Footer/Footer";
import GifCarousel from "@/components/Journey/Journey";
import ProjectsSection from "@/components/ProjectsSection/ProjectSection";
import ResumePage from "@/components/Resume/Resume";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <GifCarousel/>
      <Achievements/>
      <SkillsSection/>
      <ProjectsSection/>
      <ResumePage/>
      <ContributionSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}
