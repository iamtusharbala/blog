import React, { useState, useEffect } from "react";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@iam_tusharbala",
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
        }
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.items) {
          setPosts(data.items);
        }
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error("Error fetching Medium posts:", error);
          setPosts([]); // Set empty array on error
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  if (loading) {
    return (
      <section className="blogs d-flex" id="blogs">
        <div className="col-lg-12 d-flex flex-column align-items-start justify-content-end">
          <p className="text-start section-heading">blogs</p>
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
