
import "./Skills.css";

function Skills() {
  return (
    <section className="skills d-flex" id="skills">
      <div className="col-lg-12 d-flex flex-column align-items-start justify-content-end">
        <p className="text-start section-heading">Skills</p>
        <div className="skills-grid">
          <span className="skill-tag">ServiceNow</span>
          <span className="skill-tag">Javascript</span>
          <span className="skill-tag">Angular</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">Figma</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">API Integration</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">Postman</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
