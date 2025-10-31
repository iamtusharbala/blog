import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import tbkLogo from "../assets/images/t-logo-transparent.png";
import tbkLogoWhite from "../assets/images/t-logo-white-transparent.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.setAttribute("data-theme", "dark");
      root.classList.add("dark");
    } else {
      root.setAttribute("data-theme", "light");
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="mx-auto py-3 lg:flex justify-between items-center h-1/6">
      <div className="logo-image lg:ml-45 text-left">
        {darkMode ? (
          <img src={tbkLogoWhite} alt="logo" className="w-20 cursor-pointer" />
        ) : (
          <img src={tbkLogo} alt="logo" className="w-20 cursor-pointer" />
        )}
      </div>
      <div className="dark-mode md:mr-45 p-1 rounded group hover:bg-gray-200 transition-colors hidden xl:block">
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
  );
};

export default Navbar;
