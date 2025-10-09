import "./About.css";
import img from "../../assets/images/IMG_3762.webp";

function About() {
  return (
    <section className="about d-flex justify-content-evenly" id="about">
      <div className="row w-100">
        <div className="col-lg-8 d-flex flex-column align-items-start justify-content-end">
        <h2 className="section-heading">About</h2>
        <h1 className="section-text text-justify lh-lg">
          I'm <span className="bold">Tushar Balakrishnan</span>, a <span className="bold">ServiceNow Developer</span> dedicated to creating
          efficient, scalable, and user-focused solutions. 
        </h1>
        <h2 className="section-text text-justify lh-lg">I specialize in
          leveraging the ServiceNow platform to streamline workflows, automate
          processes, and solve real-world business challenges. With a strong
          passion for continuous learning and clean coding practices, I strive
          to bridge the gap between technology and business needs while growing
          into a well-rounded and impactful software professional.</h2>
        
        <div className="mt-4">
          <a 
            href="/Tushar Resume.pdf" 
            download={`Tushar_Balakrishnan_Resume_${new Date().getFullYear()}.pdf`}
            className="btn btn-outline-primary btn-lg me-3"
            style={{
              fontFamily: '"Ubuntu Sans Mono", monospace',
              fontWeight: '500',
              padding: '0.75rem 1.5rem',
              borderColor: 'var(--color-accent)',
              color: 'var(--color-accent)',
              borderRadius: '25px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--color-accent)';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--color-accent)';
            }}
          >
            <i className="fas fa-download me-2"></i>
            Download Resume
          </a>
        </div>
      </div>
      <div className="col-lg-4 mt-5 text-center">
        <img src={img} className="img-fluid" alt="Tushar Image" loading="lazy" />
      </div>
      </div>
    </section>
  );
}

export default About;
