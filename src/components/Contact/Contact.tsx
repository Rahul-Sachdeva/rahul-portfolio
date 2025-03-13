"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Link from "next/link";
 // Icon for location
 import { FaLocationDot } from "react-icons/fa6";
 import { TextureLoader } from "three";
import { FormEvent, useState } from "react";
import axios from "axios";
import { toast } from "sonner"
import Image from "next/image";
import { useMediaQuery } from 'react-responsive'

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
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const [loading, setLoading] = useState<boolean>(false); 
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Ludhiana,+Punjab/@30.9003191,75.7742717,12z/data=!3m1!4b1!4m6!3m5!1s0x391a837462345a7d:0x681102348ec60610!8m2!3d30.900965!4d75.8572758!16zL20vMDJjN3Ri?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const validateEmail = (email:string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const newErrors = { name: "", email: "", message: "" };
    
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format";
    if (!message.trim()) newErrors.message = "Message is required";

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/contact", { name, email, message });
      toast.success("Message Sent Successfully!", { position: "top-right" });
      setName("");
      setEmail("");
      setMessage("");
      setErrors({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Try again later!", { position: "top-right" });
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="z-20 max-w-[90vw] mx-auto flex flex-col md:flex-row items-center justify-between mb-5 md:p-8 text-white">
      {/* Left Section: Contact Form */}
      <div className="md:w-1/2 space-y-6 p-6 bg-[#2a1d4c] rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold">Contact.</h2>
        <p>Let&apos;s connect! Feel free to reach out through any method below.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full p-2 bg-[#151030] rounded border border-gray-600"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full p-2 bg-[#151030] rounded border border-gray-600"
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block font-semibold">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 bg-[#151030] rounded border border-gray-600"
              placeholder="Your Message"
              rows={4}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button type="submit" disabled={loading} className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded font-bold hover:opacity-80 transition">
          {loading?
            <Image src="/loading.webp" alt="Loading..." className="w-full h-9 object-contain"/> 
          :
            "Send Message 🚀"
          }
          </button>
        </form>
        <div className="flex gap-4 mt-4">
          <Link href="mailto:rahulsachdeva112005@gmail.com" className="hover:text-purple-400">
            📧 Email
          </Link>
          <Link href="tel:+919517819205" className="hover:text-purple-400">
            📞 Call
          </Link>
          <Link href="https://www.linkedin.com/in/rahul-sachdeva-961862247/" className="hover:text-purple-400">
            💼 LinkedIn
          </Link>
        </div>
      </div>

      {/* Right Section: 3D Earth & Location */}
      <div className="md:w-1/2 hidden lg:flex flex-col items-center">
        {/* 3D Earth */}
        <div className="max-w-[75vw] w-[500px] h-[550px] md:w-[500px] md:h-[550px]">
          <Canvas camera={{ position: [0, 0, 3] }}> {/* Initial zoom level */}
            <OrbitControls 
              enableZoom={true} 
              minDistance={isDesktopOrLaptop? 2:4}  // Minimum zoom (closer to Earth)
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
