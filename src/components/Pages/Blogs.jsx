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
    return <span className="loading loading-dots loading-xl"></span>;
  }

  return (
    <>
      <ul className="p-0 mt-5">
        {posts.map((post) => (
          <li className="text-sm leading-relaxed opacity-60" key={post.guid}>
            {post.title} -&nbsp;
            <a
              className="after:content-['_↗'] hover:text-[#3B82F6]"
              href={post.link}
              target="_blank"
            >
              Read Now
            </a>
            <p className="text-sm mb-4 text-black dark:text-gray-200">
              {formatDate(post.pubDate)}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.contentSnippet }} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Blogs;
