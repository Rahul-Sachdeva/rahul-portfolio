"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Link from "next/link";
 // Icon for location
 import { FaLocationDot } from "react-icons/fa6";
 import { TextureLoader } from "three";


 const Earth = () => {
  const earthTexture = useLoader(TextureLoader, "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg");

  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

const Contact = () => {

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Ludhiana,+Punjab/@30.9003191,75.7742717,12z/data=!3m1!4b1!4m6!3m5!1s0x391a837462345a7d:0x681102348ec60610!8m2!3d30.900965!4d75.8572758!16zL20vMDJjN3Ri?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  return (
    <div className="z-20 mx-auto flex flex-col md:flex-row items-center justify-between p-8 text-white">
      {/* Left Section: Contact Form */}
      <div className="md:w-1/2 space-y-6 p-6 bg-[#2a1d4c] rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold">Contact.</h2>
        <p>Let's connect! Feel free to reach out through any method below.</p>
        <form className="space-y-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-2 bg-[#151030] rounded border border-gray-600"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-2 bg-[#151030] rounded border border-gray-600"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block font-semibold">Message</label>
            <textarea
              className="w-full p-2 bg-[#151030] rounded border border-gray-600"
              placeholder="Your Message"
              rows={4}
            ></textarea>
          </div>
          <button className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded font-bold hover:opacity-80 transition">
            Send Message 🚀
          </button>
        </form>
        <div className="flex gap-4 mt-4">
          <Link href="mailto:your.email@example.com" className="hover:text-purple-400">
            📧 Email
          </Link>
          <Link href="tel:+911234567890" className="hover:text-purple-400">
            📞 Call
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" className="hover:text-purple-400">
            💼 LinkedIn
          </Link>
        </div>
      </div>

      {/* Right Section: 3D Earth & Location */}
      <div className="md:w-1/2 flex flex-col items-center">
        {/* 3D Earth */}
        <div className="w-[500px] h-[550px] md:w-[500px] md:h-[550px]">
          <Canvas camera={{ position: [0, 0, 3] }}> {/* Initial zoom level */}
            <OrbitControls 
              enableZoom={true} 
              minDistance={2}  // Minimum zoom (closer to Earth)
              maxDistance={6}  // Maximum zoom (far away)
              autoRotate 
              autoRotateSpeed={1.5} 
            />
            <Stars />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <Earth/>
          </Canvas>
        </div>

        {/* Location Section */}
        <button 
          onClick={openGoogleMaps} 
          className="flex items-center gap-2 bg-[#2a1d4c] hover:bg-[#3c2b68] text-white p-3 rounded-lg"
        >
          <FaLocationDot />
          <span>Ludhiana, Punjab, India</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
