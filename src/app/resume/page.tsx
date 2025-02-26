"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const PdfViewer = dynamic(() => import("@/components/ResumeViewer/ResumeViewer"), {
    ssr: false,
  });

const ResumePage = () => {
  return (
    <div className="mx-auto z-10 flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>

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
    </div>
  );
};

export default ResumePage;
