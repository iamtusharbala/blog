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
      <div className="dark-mode mr-30">
        {darkMode ? (
          <Sun className="cursor-pointer" onClick={() => setDarkMode(false)} />
        ) : (
          <Moon className="cursor-pointer" onClick={() => setDarkMode(true)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
