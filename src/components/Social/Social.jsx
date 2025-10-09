import "./Social.css";

function Social() {
 return (
    <div 
      className="social d-flex justify-content-center my-5 gap-4 align-items-center flex-wrap"
    >
      <a
        href="https://www.linkedin.com/in/tushar-balakrishnan/"
        target="_blank"
        aria-label="LinkedIn"
        rel="noopener noreferrer"
        className="fs-3 fs-sm-2 text-decoration-none"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>

      <a
        href="https://www.instagram.com/iam_tusharbala/"
        target="_blank"
        aria-label="Instagram"
        rel="noopener noreferrer"
        className="fs-3 fs-sm-2 text-decoration-none"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://github.com/iamtusharbala"
        target="_blank"
        aria-label="GitHub"
        rel="noopener noreferrer"
        className="fs-3 fs-sm-2 text-decoration-none"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.youtube.com/@iam_tusharbala"
        target="_blank"
        aria-label="YouTube"
        rel="noopener noreferrer"
        className="fs-3 fs-sm-2 text-decoration-none"
      >
        <i className="fa-brands fa-youtube"></i>
      </a>

      <a
        href="https://twitter.com/iam_tusharbala"
        target="_blank"
        aria-label="Twitter"
        rel="noopener noreferrer"
        className="fs-3 fs-sm-2 text-decoration-none"
      >
        <i className="fa-brands fa-x-twitter"></i>
      </a>
    </div>
  );
}

export default Social;
