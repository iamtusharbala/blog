import React, { useEffect, useState } from "react";
import tusharImage from "../assets/images/IMG_3762.webp";
import tusharImageMemoji from "../assets/images/memoji.PNG";
import About from "./Pages/About";
import WorkExp from "./Pages/WorkExp";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Certifications from "./Pages/Certifications";
import Blogs from "./Pages/Blogs";
import SocialPill from "./SocialPill";
import { Moon, Sun } from "lucide-react";

const Container = () => {
  const [darkMode, setDarkMode] = useState("dark" ? true : false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute("data-theme", "dark"); //default as dark
    } else {
      root.setAttribute("data-theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="w-full min-h-dvh max-w-[600px] px-4 md:px-0 pt-30 pb-14 mx-auto flex flex-col gap-14 ">
      <div className="name">
        <div className="first-row flex justify-between">
          <div className="name-row">
            <strong className="text-xl hover:text-gray-300 cursor-pointer">
              Tushar Balakrishnan V
            </strong>
          </div>
          <div className="toggle-dark">
            <div className="dark-mode p-1 rounded group transition-colors block cursor-pointer">
              <div
                className={`theme-toggle ${darkMode ? "dark" : ""}`}
                role="button"
                aria-pressed={darkMode}
                title={darkMode ? "Switch to light" : "Switch to dark"}
                onClick={() => setDarkMode((s) => !s)}
              >
                {darkMode ? (
                  <Sun size={25} className="icon sun text-yellow-400" />
                ) : (
                  <Moon size={25} className="icon moon text-gray-800" />
                )}
              </div>
            </div>
          </div>
        </div>
        <p className="text-md font-light">
          ServiceNow Developer |{" "}
          <a
            className="after:content-['_↗']"
            href="https://www.infosys.com/"
            target="_blank"
          >
            Infosys
          </a>
        </p>
      </div>
      <p className="text-sm leading-relaxed opacity-60 text-wrap">
        I'm a <span className="font-bold">ServiceNow Developer</span> who enjoys
        writing clean, reliable code and building practical applications. With
        JavaScript and Node.js at the core of my work, I focus on creating
        solutions that simplify processes and deliver real value. I love
        continuously learning, exploring new technologies, and building side
        projects to grow into a well-rounded engineer.
      </p>
      <div className="project-section my-5">
        <strong className="text-md cursor-pointer underline underline-offset-8">
          projects
        </strong>
        <Projects />
      </div>
      <div className="work-section my-5">
        <strong className="text-md cursor-pointer underline underline-offset-8">
          work experience
        </strong>
        <WorkExp />
      </div>
      <div className="blog-section my-5">
        <strong className="text-md cursor-pointer underline underline-offset-8">
          blogs
        </strong>
        <Blogs />
      </div>
      <div className="skills-section my-5">
        <strong className="text-md cursor-pointer underline underline-offset-8">
          skills
        </strong>
        <Skills />
      </div>
      <div className="certs-section my-5">
        <strong className="text-md cursor-pointer underline underline-offset-8">
          certifications
        </strong>
        <Certifications />
      </div>

      <div className="footer-section my-5">
        <SocialPill />
      </div>
    </div>
  );
};

export default Container;
