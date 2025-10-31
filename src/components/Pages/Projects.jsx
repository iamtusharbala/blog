import { Github, Radio } from "lucide-react";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projectArray, setProjectArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const selectedProjects = ["date-buddy", "contact-manager", "Ponman", "blog"];

  const fetchRepos = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/iamtusharbala/repos?sort=created&direction=desc",
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      );
      const repositories = await response.json();

      // 🔍 Filter only selected ones
      const filtered = repositories.filter((repo) =>
        selectedProjects.includes(repo.name)
      );
      setProjectArray(filtered);
    } catch (error) {
      console.error("Error fetching repos:", error);
    } finally {
      setLoading(false); // 👈 stop loading once done
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);
  return (
    <div className="max-h-80 overflow-y-auto overflow-x-hidden rounded-box dark:bg-[#121212] z-10">
      {loading ? (
        <div className="flex justify-center items-center h-40 text-sm opacity-70">
          <span className="loading loading-dots loading-xl"></span>.
        </div>
      ) : projectArray.length > 0 ? (
        <ul className="list rounded-box shadow-md">
          {projectArray.map((project, index) => (
            <li className="list-row" key={project.id}>
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                {index + 1}
              </div>
              <div className="list-col-grow">
                <div className="text-xl font-semibold">{project.name}</div>
                <div className="text-sm mt-2 opacity-60">
                  {project.description}
                </div>
              </div>
              <a
                className="btn btn-square btn-ghost cursor-pointer tooltip tooltip-left"
                data-tip="go to repo"
                href={project.html_url}
                target="_blank"
              >
                <Github />
              </a>

              {project.homepage && (
                <a
                  className="btn btn-square btn-ghost cursor-pointer tooltip tooltip-left"
                  data-tip="go to live!"
                  href={project.homepage}
                  target="_blank"
                >
                  <Radio />
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-40 text-sm opacity-60">
          No projects found.
        </div>
      )}
    </div>
  );
};

export default Projects;
