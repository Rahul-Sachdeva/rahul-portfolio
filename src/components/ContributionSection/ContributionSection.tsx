"use client";
import React, { useEffect, useState } from "react";
import {
  LeetCodeCalendar,
  GitHubCalendar,
  CombinationCalendar,
} from "github-leetcode-component";
// import GitHubCalendar from 'react-github-calendar'
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { fetchGitHubContributions } from "../FetchGithubStats/FetchGithubStats";
import { motion } from "framer-motion";

interface Activity {
	date: string;
	count: number;
	level: 0 | 1 | 2 | 3 | 4;
}

const ContributionSection = () => {
  const [activeTab, setActiveTab] = useState("combined");
  // const [githubData, setGithubData] = useState<Activity[]>([]);

  // useEffect(() => {
  //   const fetchContributions = async () => {
  //     const data = await fetchGitHubContributions();
  //     if(data){
  //       setGithubData(transformGitHubData(data));
  //     }
  //   };
  //   fetchContributions();
  // }, []);

  // useEffect(() => {
  //   console.log("github Data: ", githubData);
  // },[githubData]);

  // const transformGitHubData = (apiResponse) => {
  //   console.log("Data: ", apiResponse);
  //   const weeks = apiResponse.data.user.contributionsCollection.contributionCalendar.weeks;
  //   // Flatten the nested structure into a single array of contributions
  //   const transformedData:Activity[] = weeks.flatMap((week) =>
  //     week.contributionDays.map((day) => ({
  //       date: day.date,  // YYYY-MM-DD
  //       count: day.contributionCount, // Number of commits
  //       level: getContributionLevel(day.contributionCount), // Convert count to level
  //     }))
  //   );
  //   console.log("updated data:", transformedData);
  //   return transformedData;
  // };
  
  // Function to determine level based on contribution count
  // const getContributionLevel = (count) => {
  //   if (count === 0) return 0;
  //   if (count < 5) return 1;
  //   if (count < 10) return 2;
  //   if (count < 20) return 3;
  //   return 4; // Highest level
  // };
  

  const githubUsername = "Rahul-Sachdeva";
  const leetcodeUsername = "Rahul_Sachdeva";

  return (
    <div id="contributions" className="pt-10 z-20">
    <div className="bg-[#2a1d4c] z-20 text-white p-6 mb-10 rounded-lg shadow-lg">
      <motion.h1
          className="text-4xl font-extrabold mb-10 text-center text-[#8A2BE2]"
          animate={{ opacity: [0, 1], scale: [0.9, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
      >
        Contributions
      </motion.h1>


      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 w-40 text-xl flex items-center justify-center rounded ${
            activeTab === "combined" ? "bg-blue-600" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("combined")}
        >
          <FaGithub size={25}/>
          <p className="px-1 text-2xl">{"+"}</p>
          <SiLeetcode size={25}/>
        </button>
        <button
          className={`px-4 py-2 w-40 flex justify-center items-center text-xl rounded ${
            activeTab === "github" ? "bg-green-600" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("github")}
        >
          <p className="px-1 text-xl">GitHub</p>
          <FaGithub size={25}/>
        </button>
        <button
          className={`px-4 py-2 w-40 flex justify-center items-center rounded ${
            activeTab === "leetcode" ? "bg-yellow-600" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("leetcode")}
        >
          <p className="px-1 text-xl">LeetCode</p>
          <SiLeetcode size={25}/>
        </button>
      </div>

      {/* Display the Calendar Based on Active Tab */}
      {activeTab === "combined" && (
        <CombinationCalendar github_username={githubUsername} leetcode_username={leetcodeUsername} size="medium"/>
      )}
      {activeTab === "github" && 
      <>
      {/* <GitHubCalendar username={githubUsername} transformData={() => githubData}/> */}
      <GitHubCalendar username={githubUsername} size="medium"/>
      </>
      }
      {activeTab === "leetcode" && <LeetCodeCalendar username={leetcodeUsername} size="medium" />}
    </div>
    </div>
  );
};

export default ContributionSection;
