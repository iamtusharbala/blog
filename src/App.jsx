import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Developer from "./components/DDD section/Developer";
import WorkExp from "./components/Work Experience/WorkExp";
import Skills from "./components/Skills/Skills";
import Certs from "./components/Certs/Certs";
import Footer from "./components/Footer/Footer";
import Social from "./components/Social/Social";

// Lazy load non-critical components
const LazyBlogs = lazy(() => import("./components/Blogs/Blogs"));
const LazyCrafted = lazy(() => import("./components/Crafted/Crafted"));

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
        <Suspense fallback={<div className="text-center my-5">Loading blogs...</div>}>
          <LazyBlogs />
        </Suspense>
        <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
          <LazyCrafted />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;
