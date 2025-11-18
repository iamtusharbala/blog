import React from "react";

const skills = [
  "ServiceNow",
  "Javascript",
  "Angular",
  "NPM",
  "Node.js",
  "Express",
  "Mongo DB",
  "Figma",
  "React",
  "Python",
  "API's",
  "SQL",
  "Postman",
];

const Skills = () => {
  return (
    <>
      <div className="skills-pill flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-gray-200 text-sm px-3 py-1 rounded-full hover:text-white hover:bg-[#3B82F6] transition-colors cursor-pointer m-1 dark:bg-[#757575]"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
};

export default Skills;
