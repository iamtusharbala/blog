import React from "react";

function Skills() {
  return (
    <section className="skills d-flex" id="skills">
      <div className="col-lg-12 d-flex flex-column align-items-start justify-content-end">
        <p class="text-start section-heading">Skills</p>
        <div className="skill-badge d-flex justify-content-evenly flex-wrap gap-3">
          <h2>
            <span class="badge text-bg-secondary section-text p-3">ServiceNow</span>
          </h2>
          <h2>
            <span class="badge text-bg-secondary section-text p-3">Javascript</span>
          </h2>
          <h2>
            <span class="badge text-bg-secondary section-text p-3">Angular</span>
          </h2>
          <h2>
            <span class="badge text-bg-secondary section-text p-3">Node.js</span>
          </h2>
          <h2>
            <span class="badge text-bg-secondary section-text p-3">Figma</span>
          </h2>
          <h2>
            <span class="badge text-bg-secondary section-text p-3">React</span>
          </h2>
          <h2>
            <span class="badge text-bg-secondary section-text p-3">Python</span>
          </h2>
          <h2>
            <span class="badge text-bg-secondary section-text p-3">API Integration</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Skills;
