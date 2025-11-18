import React from "react";

const Certifications = () => {
  const certifications = [
    "ServiceNow Certified System Administrator.",
    "ServiceNow Certified Application Developer.",
    "ServiceNow Certified Implementation Specialist - IT Service Management (CIS-ITSM).",
    "ServiceNow Certified Implementation Specialist - Discovery.",
    "The Complete ServiceNow Developer Course - Udemy",
  ];
  return (
    <div className="flex gap-3 flex-col">
      <ul className="p-0 mt-5">
        {certifications.map((certification, index) => (
          <li key={index}>
            <p className="mt-2 dark-grey cursor-pointer text-sm leading-relaxed opacity-60">
              {index + 1}.&nbsp;{certification}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
