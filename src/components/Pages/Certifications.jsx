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
      <ul className="p-0">
        {certifications.map((certification, index) => (
          <li key={index} >
            <p className="text-lg mt-2 dark-grey cursor-pointer">
              {index+1}.&nbsp;{certification}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
