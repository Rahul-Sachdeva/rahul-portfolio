import GifCarousel from "@/components/Journey/Journey";
import Sidebar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-between items-center">
      
        <Sidebar/>
      <GifCarousel/>
    </div>
  );
}
