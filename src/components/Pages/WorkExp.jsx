import React from "react";

const experiences = [
  {
    startYear: 2021,
    position: "Associate Consultant",
    company: "Infosys",
    description:
      "Working as a ServiceNow Developer at Infosys, responsible for developing and customizing modules, catalog items, and workflows. I work on client and server scripts, Flow Designer, and API integrations to automate business processes. I also handle impact assessments, testing, and deployments to ensure smooth platform functionality and performance.",
    skills: [
      "ServiceNow Development",
      "Server Scripts",
      "Business Rules",
      "Service Portals",
      "Client Scripts",
      "Integrations",
    ],
  },
];

const WorkExp = () => {
  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index} className="experience my-6">
          <div className="years dark-grey text-sm">
            {experience.startYear} - {experience.endYear || "Present"}
          </div>
          <div className="job-details">
            <div className="job-title text-md font-semibold dark:text-white">
              {experience.position} | {experience.company}
            </div>
            <div className="job-description mt-2 text-sm leading-relaxed opacity-60">
              {experience.description}
            </div>
            <div className="skills-pill flex flex-wrap gap-4 mt-4">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full cursor-pointer border border-dashed"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkExp;
