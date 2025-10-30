import { CodeXml } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="about-text">
        <p className="text-lg dark-grey">
          I'm Tushar Balakrishnan V, a <b>ServiceNow Developer</b> dedicated to creating
          efficient, scalable, and user-focused solutions.<br/> <br /> I specialize in
          leveraging the ServiceNow platform to streamline workflows, automate
          processes, and solve real-world business challenges. With a strong
          passion for continuous learning and clean coding practices, I strive
          to bridge the gap between technology and business needs while growing
          into a well-rounded and impactful software professional.
        </p>
      </div>
      <div className="developer mt-4 flex justify-center">
        <p className="text-md dark-grey jetbrains-mono-font">Developer. Dreamer. Coder &nbsp;</p><span style={{display:'inline-block'}}><CodeXml color="#3B82F6" /></span>
      </div>
    </div>
  );
};

export default About;
