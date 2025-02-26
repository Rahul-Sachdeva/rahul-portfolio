const AchievementsContributionsTeaser = () => {
    return (
      <div className="max-w-xl mx-auto p-6 rounded-lg shadow-md bg-transparent">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          🏆 Achievements & Contributions
        </h2>
  
        {/* Overview Text */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Throughout my career, I've been fortunate to receive several accolades
          and have actively contributed to various impactful projects. From
          industry awards recognizing innovation to community initiatives aimed
          at fostering tech education, my journey reflects a commitment to
          excellence and giving back.
        </p>
  
        {/* Highlighted Achievements */}
        <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
          <li>Recipient of the 'Innovative Tech Leader' award in 2023.</li>
          <li>Keynote speaker at the 'Global Developers Conference' 2024.</li>
          <li>Contributor to open-source projects enhancing web accessibility.</li>
          <li>Organized coding bootcamps for underrepresented communities.</li>
        </ul>
  
        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/achievements-contributions"
            className="inline-block bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full transition-transform transform hover:scale-105"
          >
            🎯 Discover More Achievements →
          </a>
        </div>
      </div>
    );
  };
  
  export default AchievementsContributionsTeaser;
  