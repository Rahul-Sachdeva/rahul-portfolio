"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";

const PdfViewer = dynamic(() => import("@/components/ResumeViewer/ResumeViewer"), {
    ssr: false,
  });

const ResumePage = () => {
  return (
    <motion.div id="resume" className="mx-auto z-20 flex flex-col items-center justify-center min-h-screen p-8">
      <motion.h1
          className="text-4xl font-extrabold mb-10 text-center text-[#8A2BE2]"
          animate={{ opacity: [0, 1], scale: [0.9, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          My Resume
        </motion.h1>
      
      {/* PDF Viewer */}
      <PdfViewer
        fileUrl={`resume.pdf`}
      />

      {/* Download Button */}
      <a
        href="/resume.pdf"
        download="My_Resume.pdf"
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
      >
        Download Resume
      </a>
    </motion.div>
  );
};

export default ResumePage;
