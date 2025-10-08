import React from "react";
import Social from "../Social/Social";

function Footer() {
  return (
    <div className="footer d-flex my-5 align-items-end">
      <div className="left-div">
        <div className="d-flex flex-column">
          <a class="navbar-brand" href="#">
            tbk.
          </a>
          <div className="low-footer d-flex flex-row">
            <span className="section-text">MIT Licence 2025</span>
            <a
              className="section-text ms-3"
              href="https://github.com/iamtusharbala/blog"
              target="_blank"
            >
              Repo &#8599;
            </a>
          </div>
        </div>
      </div>
      <div className="right-div ms-auto">
        <Social />
      </div>
    </div>
  );
}

export default Footer;
