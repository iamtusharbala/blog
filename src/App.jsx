import React from "react";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import Container from "./components/Container";
import RightMenu from "./components/RightMenu";
import { Routes, Route, Navigate } from "react-router-dom";
import SocialPill from "./components/SocialPill";
import Message from "./components/Message";

const App = () => {
  return (
    <div className=" bg-white dark:bg-black container">
      <Navbar />
      <div className="lg:mx-20 h-4/6 md:flex sm:flex-col xl:flex-row lg:justify-between">
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
        <Message />
      </div>
      <SocialPill />
    </div>
  );
};

export default App;
