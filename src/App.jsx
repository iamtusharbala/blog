import { useState } from "react";
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
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Navbar />
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
