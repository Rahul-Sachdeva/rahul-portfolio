import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Image from 'next/image';

const IntroductionSlide = () => {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="md:min-w-xl md:max-w-xl mx-auto md:p-6 text-white flex flex-col items-center justify-center mt-10 md:mt-0 md:h-screen">
      {/* Greeting with Animated Waving Hand */}
      <motion.h1
        className="text-5xl font-bold mb-4 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi,{" "}
        <motion.span
          role="img"
          aria-label="waving hand"
          className="ml-2"
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          👋
        </motion.span>
      </motion.h1>

      <br/> <strong> Welcome to my Galaxy 🚀 </strong>

      <div className="block lg:hidden text-xl mt-4">&lt;Rahul Sachdeva /&gt;</div>
      <div className="block lg:hidden mb-4 w-60 h-[264px] mt-2 rounded-[30px] overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <Image src="/rahul-sachdeva.png" alt="Rahul" fill className="w-full h-full object-cover" />
      </div>
      {/* Typewriter Effect */}
      <motion.div
        className="text-xl md:text-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ['I\'m Rahul Sachdeva.','I\'m a Computer Science Engineer.','I\'m a Full Stack Developer.', 'I\'m a Problem Solver.'],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-center text-lg mb-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Ever wondered how ideas become stunning websites? I&apos;m a Web Developer who loves making that magic happen.
      </motion.p>

      {/* View Resume Button */}
        <motion.button
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={() => scrollToSection("resume")}
        >
          View Resume
        </motion.button>
        <motion.button
          className="bg-gradient-to-r mt-6 from-pink-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </motion.button>
    </div>
  );
};

export default IntroductionSlide;
