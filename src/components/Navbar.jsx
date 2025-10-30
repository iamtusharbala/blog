import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import tbkLogo from "../assets/images/t-logo-transparent.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="mx-auto py-3 flex justify-between items-center h-1/6">
      <div className="logo-image ml-30">
        <img src={tbkLogo} alt="logo" className="w-20 cursor-pointer" />
      </div>
      <div className="dark-mode mr-30 p-1 rounded group hover:bg-gray-200 transition-colors">
        <div
          className={`theme-toggle ${darkMode ? "dark" : ""}`}
          role="button"
          aria-pressed={darkMode}
          title={darkMode ? "Switch to light" : "Switch to dark"}
          onClick={() => setDarkMode((s) => !s)}
        >
          <Sun className="icon sun" size={25} />
          <Moon className="icon moon" size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
