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
      </div>
      <div className="col-lg-4 mt-5 text-center">
        <img src={img} className="img-fluid" alt="Tushar Image" />
      </div>
      </div>
    </section>
  );
}

export default About;
