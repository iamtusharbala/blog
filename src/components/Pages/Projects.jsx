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
    <div className="max-h-80 overflow-y-auto overflow-x-hidden rounded-box z-10 mt-4">
      {loading ? (
        <div className="flex justify-center items-center h-40 text-sm opacity-70">
          <span className="loading loading-dots loading-xl"></span>.
        </div>
      ) : projectArray.length > 0 ? (
        <ul className="flex gap-4">
          {projectArray.map((project) => (
            <li className="list-item" key={project.id}>
              <div className="text-md leading-relaxed opacity-60">
                <a
                  className="after:content-['_↗'] dark:hover:text-white hover:opacity-100 hover:text-black"
                  href={project.html_url}
                  target="_blank"
                >
                  {project.name}
                </a>
              </div>
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
