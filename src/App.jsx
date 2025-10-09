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

  // initialize theme from localStorage or prefers-color-scheme
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  // apply theme to document root and persist
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
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
