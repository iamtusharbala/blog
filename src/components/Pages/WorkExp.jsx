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
  }
];

const WorkExp = () => {
  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index} className="experience my-3">
          <div className="years text-gray-600 text-sm">
            {experience.startYear} - {experience.endYear || "Present"}
          </div>
          <div className="job-details">
            <div className="job-title text-xl font-semibold">
              {experience.position} @ {experience.company}
            </div>
            <div className="job-description dark-grey mt-2">
              {experience.description}
            </div>
            <div className="skills-pill flex flex-wrap gap-2 mt-3">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-sm px-3 py-1 rounded-full cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <hr/>
    </>
  );
};

export default WorkExp;
