const FutureGoals = () => {
    return (
      <section className="relative text-white py-20">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Future Goals & Vision 🚀
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Striving to push boundaries in technology, leadership, and innovation.
          </p>
        </div>
  
        {/* Goals Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* Goal 1: Mastering Advanced Tech */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-yellow-300">
              🚀 Master Cutting-Edge Tech
            </h3>
            <p className="mt-2 text-gray-400">
              Deepen expertise in <strong>AI, Cloud Computing, and Blockchain</strong> to build next-gen applications.
            </p>
          </div>
  
          {/* Goal 2: Leadership & Mentorship */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-yellow-300">
              👨‍💻 Lead & Mentor Teams
            </h3>
            <p className="mt-2 text-gray-400">
              Grow into a **Tech Lead/Architect role**, guiding teams to build scalable and efficient systems.
            </p>
          </div>
  
          {/* Goal 3: Open Source & Community */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-yellow-300">
              🌎 Contribute to Open Source
            </h3>
            <p className="mt-2 text-gray-400">
              Give back by **contributing to open-source projects**, writing blogs, and speaking at tech events.
            </p>
          </div>
  
          {/* Goal 4: Startup/Entrepreneurship */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-yellow-300">
              🚀 Build Something Big
            </h3>
            <p className="mt-2 text-gray-400">
              Dreaming of launching a **tech startup**, solving real-world problems with innovation.
            </p>
          </div>
  
          {/* Goal 5: Continuous Learning */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-yellow-300">
              📚 Never Stop Learning
            </h3>
            <p className="mt-2 text-gray-400">
              Stay ahead in the fast-moving tech world by **learning, experimenting, and evolving**.
            </p>
          </div>
  
          {/* Goal 6: Ethical & Sustainable Tech */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-yellow-300">
              🌱 Ethical & Sustainable Tech
            </h3>
            <p className="mt-2 text-gray-400">
              Work towards **tech solutions that are ethical, inclusive, and sustainable**.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default FutureGoals;
  