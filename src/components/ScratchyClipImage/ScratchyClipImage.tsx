import Image from "next/image";
import "./ScratchyClipImage.css";

export default function ScratchyClipImage() {
  return (
    <div className="relative w-80 h-96">
      <svg width="0" height="0">
      
      
      <clipPath id="scratchyClip" clipPathUnits="objectBoundingBox">
  <path d="M0,0.03 L0.1,-0.02 L0.2,0.06 L0.3,-0.05 L0.4,0.1 L0.5,-0.03 L0.6,0.08 L0.7,-0.05 
           L0.8,0.12 L0.9,-0.02 L1,0.05 
           L1,0.95 L0.9,1.1 L0.8,0.92 L0.7,1.08 L0.6,0.9 L0.5,1.05 L0.4,0.9 L0.3,1.12 L0.2,0.92 L0.1,1.05 L0,0.97 Z" />
</clipPath>

      </svg>

      <div className="clip-container">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={200}
          height={200}
          className="clip-image"
        />
      </div>
    </div>
  );
}
