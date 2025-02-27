import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Link from 'next/link';

const IntroductionSlide = () => {
  return (
    <div className="min-w-xl max-w-xl mx-auto p-6 text-white flex flex-col items-center justify-center h-screen">
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

      {/* Typewriter Effect */}
      <motion.div
        className="text-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ['I\'m Rahul Sachdeva.','I\'m a Full Stack Developer.', 'I\'m a Problem Solver.', 'I\'m a Tech Enthusiast.'],
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
        Ever wondered how ideas become stunning websites? I'm a Web Developer who loves making that magic happen.
      </motion.p>

      {/* View Resume Button */}
      <Link href="/resume">
      <motion.a
        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-transform transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        View Resume
      </motion.a>
      </Link>
      <Link href="/contact" className='mt-6'>
      <motion.a
        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-transform transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Contact Me
      </motion.a>
      </Link>
    </div>
  );
};

export default IntroductionSlide;
