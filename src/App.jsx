import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Developer from "./components/DDD section/Developer";
import WorkExp from "./components/Work Experience/WorkExp";
import Skills from "./components/Skills/Skills";
import Certs from "./components/Certs/Certs";
import Blogs from "./components/Blogs/Blogs";
import Crafted from "./components/Crafted/Crafted";
import Footer from "./components/Footer/Footer";
import Social from "./components/Social/Social";

function App() {
  const [theme, setTheme] = useState("light");

  // initialize theme - default to light theme
  useEffect(() => {
    // Default to light theme, no localStorage persistence
    setTheme('light');
  }, []);

  // apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useMemo(() => () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark')), []);

  return (
    <div className="container">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <div className="container px-5">
        <About />
        <Social />
        <Developer />
        <WorkExp />
        <Skills />
        <Certs />
        <Blogs />
        <Crafted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
