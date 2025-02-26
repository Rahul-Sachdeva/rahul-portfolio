const SkillsProjectsSlide = () => {
    return (
      <div className="max-w-xl mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-md">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-yellow-400">
          🚀 Skills & Projects Overview
        </h2>
        
        {/* Overview Text */}
        <p className="mt-3 text-gray-300 text-sm leading-relaxed">
          A **fusion of cutting-edge technologies** and **real-world problem-solving.** 
          From **React-driven UIs** to **backend optimizations**, I love building scalable, efficient, and 
          visually stunning applications.  
        </p>
  
        {/* Quick Tech Highlights */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full">
            Full-Stack Development
          </span>
          <span className="px-3 py-1 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full">
            Role-Based Access Control
          </span>
          <span className="px-3 py-1 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full">
            React & Tailwind
          </span>
          <span className="px-3 py-1 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full">
            Node.js & Laravel
          </span>
          <span className="px-3 py-1 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full">
            Fuzzy Search & Data Handling
          </span>
        </div>
  
        {/* Teasing the Projects */}
        <div className="mt-5">
          <p className="text-gray-400 text-sm">
            **Worked on projects involving:**  
            - 🔍 **AI-Powered Search & Filtering**  
            - 🔐 **Scalable Role-Based Authentication**  
            - 🎨 **Pixel-Perfect UI Designs with Tailwind**  
            - 📊 **Data Visualization & Dashboarding**  
          </p>
        </div>
  
        {/* CTA Button */}
        <div className="mt-6 text-center">
          <a
            href="/skills-projects"
            className="inline-block bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full transition-transform transform hover:scale-105"
          >
            🔥 Explore My Skills & Projects →
          </a>
        </div>
      </div>
    );
  };
  
  export default SkillsProjectsSlide;
  