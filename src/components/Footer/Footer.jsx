import Social from "../Social/Social";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer d-lg-flex my-5 align-items-end">
      <div className="left-div">
        <div className="d-lg-flex flex-column">
          <a className="navbar-brand" href="#">
            tbk.
          </a>
          <div className="low-footer d-flex flex-row">
            <span className="section-text">MIT Licence 2025</span>
            <a
              className="section-text ms-3 repo-link"
              href="https://github.com/iamtusharbala/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo &#8599;
            </a>
          </div>
        </div>
      </div>
      <div className="right-div d-flex justify-content-sm-between ms-auto">
        <Social />
      </div>
    </footer>
  );
}

export default Footer;
