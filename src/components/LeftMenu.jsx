import React from "react";
import { NavLink } from "react-router-dom";

const LeftMenu = () => {
  const linkClasses = ({ isActive }) =>
    `no-underline text-xl cursor-pointer shrink transition-colors duration-200 ${
      isActive ? "text-black dark:text-white font-medium" : "text-gray-500 dark:hover:text-white hover:text-black"
    }`;

  return (
    <ul className="menu px-0 my-4 xl:flex flex-col gap-6 justify-center hidden">
      <NavLink to="/about" className={linkClasses}>
        <li>About</li>
      </NavLink>
      <NavLink to="/work-experience" className={linkClasses}>
        <li>Work Experience</li>
      </NavLink>
      <NavLink to="/skills" className={linkClasses}>
        <li>Skills</li>
      </NavLink>
      <NavLink to="/projects" className={linkClasses}>
        <li>Projects</li>
      </NavLink>
      <NavLink to="/certifications" className={linkClasses}>
        <li>Certifications</li>
      </NavLink>
      <NavLink to="/blogs" className={linkClasses}>
        <li>Blogs</li>
      </NavLink>
      <NavLink to="/brand" className={linkClasses}>
        <li>Brand.</li>
      </NavLink>
    </ul>
  );
};

export default LeftMenu;
