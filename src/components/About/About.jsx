import React from "react";
import "./About.css";
import img from "../../assets/images/IMG_3762.webp";

function About() {
  return (
    <section className="about d-flex justify-content-evenly">
      <div className="row">
        <div className="col-lg-8 d-flex flex-column align-items-start justify-content-end">
        <p class="text-start section-heading">About</p>
        <p class="text-start section-text">
          I'm Tushar Balakrishnan, a <span className="bold">ServiceNow Developer</span> dedicated to creating
          efficient, scalable, and user-focused solutions. I specialize in
          leveraging the ServiceNow platform to streamline workflows, automate
          processes, and solve real-world business challenges. With a strong
          passion for continuous learning and clean coding practices, I strive
          to bridge the gap between technology and business needs while growing
          into a well-rounded and impactful software professional.
        </p>
      </div>
      <div className="col-lg-4">
        <img src={img} class="img-fluid" alt="Tushar Image" />
      </div>
      </div>
    </section>
  );
}

export default About;
