

export const fetchGitHubContributions = async () => {
    const githubToken = process.env.GITHUB_TOKEN; // Store in .env
    const githubUsername = "Rahul-Sachdeva";
    const query = `
      query {
        user(login: "${githubUsername}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `;
  
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${githubToken}`,
      },
      body: JSON.stringify({ query }),
    });
  
    const data = await response.json();
    return data;
  };