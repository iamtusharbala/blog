import { MoveUpRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const RightMenu = () => {
  const linkClasses = ({ isActive }) =>
    `no-underline text-xl cursor-pointer shrink transition-colors duration-200 ${
      isActive ? "text-black font-medium" : "text-gray-500 hover:text-black"
    }`;

  return (
    <ul className="menu px-0 my-4 hidden xl:flex flex-col gap-6 justify-center items-end">
      <NavLink
        to="https://github.com/iamtusharbala/blog"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        <li className="lowercase hover:text-[#3B82F6]">
          <span>
            repo
            <MoveUpRight style={{ display: "inline-block" }} />
          </span>
        </li>
      </NavLink>
      {/* <NavLink to="/rss-feed" className={linkClasses}>
        <li className="lowercase hover:text-[#3B82F6]">
          <span>
            rss feed
            <MoveUpRight style={{ display: "inline-block" }} />
          </span>
        </li>
      </NavLink> */}
      <li className="cursor-default shrink text-gray-500 hover:text-black dark:hover:text-white text-xl">
        MIT License 2025
      </li>
    </ul>
  );
};

export default RightMenu;
