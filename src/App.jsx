import React from "react";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import Container from "./components/Container";
import RightMenu from "./components/RightMenu";
import { Routes, Route, Navigate } from "react-router-dom";
import SocialPill from "./components/SocialPill";

const App = () => {
  return (
    <div className="h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="mx-30 h-4/6 flex flex-row justify-between">
        <LeftMenu />
        <Routes>
          <Route path="/" element={<Container page="about" />} />
          <Route path="/about" element={<Container page="about" />} />
          <Route
            path="/work-experience"
            element={<Container page="work-experience" />}
          />
          <Route path="/skills" element={<Container page="skills" />} />
          <Route path="/projects" element={<Container page="projects" />} />
          <Route
            path="/certifications"
            element={<Container page="certifications" />}
          />
          <Route path="/blogs" element={<Container page="blogs" />} />
          <Route path="/brand" element={<Container page="brand" />} />
        </Routes>
        <RightMenu />
      </div>
      <div className="h-1/6 mx-30 z-10">
        <SocialPill />
      </div>
    </div>
  );
};

export default App;
