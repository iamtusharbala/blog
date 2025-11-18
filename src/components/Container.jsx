import React, { useState } from "react";
import tusharImage from "../assets/images/IMG_3762.webp";
import tusharImageMemoji from "../assets/images/memoji.PNG";
import About from "./Pages/About";
import WorkExp from "./Pages/WorkExp";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Certifications from "./Pages/Certifications";
import Blogs from "./Pages/Blogs";
import Brand from "./Pages/Brand";

const renderPage = (page) => {
  switch (page) {
    case "/":
    case "about":
      return <About />;
    case "work-experience":
      return <WorkExp />;
    case "skills":
      return <Skills />;
    case "projects":
      return <Projects />;
    case "certifications":
      return <Certifications />;
    case "blogs":
      return <Blogs />;
    case "brand":
      return <Brand />;
  }
};

const Container = ({ page }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex flex-col 100% xl:w-lg sm:mt-4 xl:mt-0">
      <div className="name-details">
        <div
          className={`flip-container ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped((s) => !s)}
          role="button"
          aria-pressed={flipped}
          title={flipped ? "Show photo" : "Show memoji"}
        >
          <div className="flipper">
            <img
              src={tusharImage}
              alt="Tushar"
              className="flip-face flip-front w-20 rounded-full object-fill cursor-pointer"
            />
            <img
              src={tusharImageMemoji}
              alt="Memoji of Tushar"
              className="flip-face flip-back w-20 rounded-full object-fill cursor-pointer"
            />
          </div>
        </div>

        <p
          className="text-xl mt-3 mb-0 dark:text-white"
          style={{ fontWeight: 500 }}
        >
          Tushar Balakrishnan V
        </p>
        <p
          className="text-sm jetbrains-mono-font dark-grey dark:text-[#d9d9d9]"
          style={{ fontStyle: "normal", letterSpacing: "1px" }}
        >
          ServiceNow Developer | Infosys
        </p>
      </div>
      <div className="pages h-3/5 mt-8">{renderPage(page)}</div>
    </div>
  );
};

export default Container;
