import React, { useEffect, useState } from "react";
import darkModeGif from "../assets/gifs/spit-salim-kumar.gif";
import lightModeGif from "../assets/gifs/pilotji-masterji.gif";

const GifImage = () => {
  const [theme, setTheme] = useState(""); // track theme
  const [visible, setVisible] = useState(false); // track gif visibility
  const [gifSrc, setGifSrc] = useState(null); // track current gif source

  useEffect(() => {
    const root = document.documentElement;

    const observer = new MutationObserver(() => {
      const currentTheme = root.getAttribute("data-theme");
      setTheme(currentTheme);

      // Select GIF only when theme changes
      const selectedGif = currentTheme === "dark" ? darkModeGif : lightModeGif;

      setGifSrc(selectedGif);
      setVisible(true);

      // Hide after 2 seconds (fade out)
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  if (!visible || !gifSrc) return null; // not visible initially

  return (
    <div
      className={`absolute bottom-10 left-50 inset-0 flex justify-start items-end bg-transparent transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 9999 }}
    >
      {/* The key ensures the GIF only plays once per toggle */}
      <img
        key={gifSrc}
        src={gifSrc}
        alt="Mode GIF"
        className="w-40 max-w-md"
      />
    </div>
  );
};

export default GifImage;
