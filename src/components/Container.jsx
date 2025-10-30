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
  const [memoji, setMemoji] = useState(false);
  return (
    <div className="flex flex-col w-lg scroll-auto overflow-none">
      <div className="name-details">
        {!memoji ? (
          <img
            className="w-20 rounded-full object-fill cursor-pointer"
            src={tusharImage}
            onClick={() => setMemoji(true)}
          />
        ) : (
          <img
            className="w-20 rounded-full object-fill cursor-pointer"
            src={tusharImageMemoji}
            onClick={() => setMemoji(false)}
          />
        )}
        <p className="text-2xl mt-3 mb-0" style={{ fontWeight: 500 }}>
          Tushar Balakrishnan V
        </p>
        <p
          className="text-md jetbrains-mono-font dark-grey"
          style={{ fontStyle: "normal", letterSpacing: "1px" }}
        >
          ServiceNow Developer | Infosys
        </p>
      </div>
      <div className="pages h-3/5 mt-3">{renderPage(page)}</div>
    </div>
  );
};

export default Container;
