import React from "react";
import "./Social.css";

function Social() {
  return (
    <div className="social text-center my-5 d-flex justify-content-center">
      <div className="linkedin">
        <a
          href="https://www.linkedin.com/in/tushar-balakrishnan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
       <div className="instagram">
        <a
          href="https://www.instagram.com/iam_tusharbala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className="github">
        <a
          href="https://github.com/iamtusharbala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="youtube">
        <a
          href="https://www.youtube.com/@iam_tusharbala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="twitter">
        <a
          href="https://twitter.com/iam_tusharbala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-x-twitter"></i>
        </a>
      </div>
     
    </div>
  );
}

export default Social;
