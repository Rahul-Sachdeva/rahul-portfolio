import React from "react";

const Introduction: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-3xl font-bold text-white mb-4">Welcome to My Journey</h2>
      <p className="text-lg text-gray-300 max-w-2xl">
        Hey there! I'm a passionate developer with a keen interest in building impactful solutions.
        I love exploring new technologies and continuously improving my skills.
      </p>
      <p className="text-lg text-gray-300 max-w-2xl mt-2">
        Dive into my journey to know more about my education, experiences, and projects!
      </p>
    </section>
  );
};

export default Introduction;
