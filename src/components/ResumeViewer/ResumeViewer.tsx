"use client";
import { pdfjs } from "react-pdf";
import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumeViewerProps{
  fileUrl: string;
}

function PdfViewer({ fileUrl}:ResumeViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess(numPages:number) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  // function goToNextPage() {
  //   if (pageNumber < numPages) {
  //     setPageNumber(pageNumber + 1);
  //   }
  // }

  // function goToPreviousPage() {
  //   if (pageNumber > 1) {
  //     setPageNumber(pageNumber - 1);
  //   }
  // }

  return (
    <div className="z-20 border bg-slate-900 flex flex-col px-2 mx-auto py-2 rounded-lg w-fit gap-2 items-center">
      <Document
        file={fileUrl ? fileUrl : ""}
        onLoadSuccess={() => onDocumentLoadSuccess(numPages)}
      >
        <Page
          renderTextLayer={false}
          pageNumber={pageNumber}
          width={windowWidth > 768 ? 0.4 * windowWidth : 0.6 * windowWidth}
        />
      </Document>
    </div>
  );
}

export default PdfViewer;
