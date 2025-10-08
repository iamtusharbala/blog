import React, { useState, useEffect } from "react";

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@iam_tusharbala"
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.items);
      })
      .catch((error) => console.error("Error fetching Medium posts:", error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <section className="blogs d-flex" id="blogs">
      <div className="col-lg-12 d-flex flex-column align-items-start justify-content-end">
        <p className="text-start section-heading">blogs</p>
        <ul>
          {posts.map((post) => (
            <li className="section-text" key={post.guid}>
              {post.title} -
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                &nbsp;Read Now &#8599;
              </a>
              <p>{formatDate(post.pubDate)}</p>
              <div dangerouslySetInnerHTML={{ __html: post.contentSnippet }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
