import React from "react";

const skills = [
  "ServiceNow",
  "Javascript",
  "Angular",
  "NPM",
  "Node.js",
  "Express",
  "Web Development",
  "Tailwind CSS",
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
      <div className="skills-pill flex flex-wrap gap-2 mt-5">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="text-sm py-1 rounded-sm hover:text-white hover:bg-[#3B82F6] transition-colors cursor-pointer m-1 dark:bg-[#191818] bg-gray-50 p-5"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
};

export default Skills;
