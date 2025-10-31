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
          Accept: "application/json",
        },
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
        if (error.name !== "AbortError") {
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
    return <span className="text-lg mr-3 size-5 animate-spin dark-grey">Loading...</span>;
  }

  return (
    <>
      <ul className="p-0">
        {posts.map((post) => (
          <li className="text-lg dark-grey" key={post.guid}>
            {post.title} -
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">
              &nbsp;Read Now &#8599;
            </a>
            <p className="text-xs my-4 text-gray-500">{formatDate(post.pubDate)}</p>
            <div dangerouslySetInnerHTML={{ __html: post.contentSnippet }} />
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Blogs;
