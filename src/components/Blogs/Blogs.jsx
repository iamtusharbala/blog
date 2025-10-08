import React from "react";

function Blogs() {
  return (
    <section className="blogs d-flex" id="blogs">
      <div className="col-lg-12 d-flex flex-column align-items-start justify-content-end">
        <p class="text-start section-heading">blogs</p>
        <ul>
          <li className="section-text">
            Overcoming the Foundations: Understanding Client-Server Architecture
            -{" "}
            <a
              className="bold"
              href="https://medium.com/@iam_tusharbala/overcoming-the-foundations-understanding-client-server-architecture-bd92d1a1992f"
              target="_blank"
            >
              Read Now &#8599;
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
