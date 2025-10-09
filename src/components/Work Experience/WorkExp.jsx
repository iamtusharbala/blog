import React from "react";
import "./WorkExp.css";

function WorkExp() {
  return (
    <section className="workExp d-flex" id="workExp">
      <div className="row">
        <div className="col-lg-12 d-flex flex-column align-items-start justify-content-end">
          <p className="text-start section-heading lh-lg">Work Exp</p>
          <p className="text-start section-text job-title">Associate Consultant</p>
          <p className="text-start section-text company">Infosys - 4 years</p>
          <p className="text-start section-text skills">
            ServiceNow Development . Server Scripts. Business Rules. <br />
            Service Portals. Client Scripts. Integrations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkExp;
