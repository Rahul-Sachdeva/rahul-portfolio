const FutureGoals = () => {
  return (
    <section className="relative text-white py-20">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Future Goals & Vision 🚀
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Pushing boundaries in technology, leadership & innovation.
        </p>
      </div>

      {/* Goals Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {[
          { icon: "🚀", title: "Master Advanced Technologies", desc: "Deepen expertise in AI, Cloud, and Blockchain." },
          { icon: "👨‍💻", title: "Lead & Mentor Teams", desc: "Guide teams & build scalable systems." },
          { icon: "🌎", title: "Open Source Contributions", desc: "Write, speak & contribute to tech communities." },
          { icon: "🚀", title: "Innovation & Solve Real Problems", desc: "Build impactful tech solutions." },
          { icon: "📚", title: "Lifelong Learning", desc: "Adapt, experiment & grow continuously." },
          { icon: "🌱", title: "Ethical Tech", desc: "Create inclusive & sustainable solutions." },
        ].map((goal, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-yellow-400/30"
          >
            <h3 className="text-xl font-semibold text-yellow-300">
              {goal.icon} {goal.title}
            </h3>
            <p className="mt-2 text-gray-400">{goal.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FutureGoals;
