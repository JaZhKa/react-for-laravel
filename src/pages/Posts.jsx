import PostComponent from "../components/PostComponent";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPosts = async (page) => {
    try {
      await axios
        .get(`api/posts?page=${page}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
          },
        })
        .then((res) => setPosts(res.data));
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (postId) => {
    if (confirm("Delete post permanently?")) {
      try {
        await axios
          .delete(`api/posts/${postId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("JWT")}`,
            },
          })
          .then(getPosts(1));
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getPosts(1);
  }, []);

  return (
    <>
      <Link
        to="/new_post"
        className="focus:shadow-outline absolute -left-28 top-0 rounded bg-gray-700 px-4 py-2 font-bold text-white shadow hover:bg-gray-400 focus:outline-none active:scale-90"
      >
        Add post
      </Link>
      <ul className="mb-8 flex flex-col space-y-10">
        {isLoaded &&
          posts.data.map((post) => (
            <PostComponent key={post.id} post={post} deletePost={deletePost} />
          ))}
      </ul>
      <div className="flex justify-center space-x-4">
        {isLoaded &&
          posts.meta.links.map((link, i) =>
            link.label === "&laquo; Previous" ||
            link.label === "Next &raquo;" ? (
              ""
            ) : (
              <button
                key={i}
                onClick={() => getPosts(link.label)}
                className={
                  "inline-block rounded-full bg-gray-200 px-2 font-semibold hover:bg-gray-300 focus:bg-gray-300 " +
                  (link.active ? "bg-gray-300" : "")
                }
              >
                {link.active ? <strong>{link.label}</strong> : link.label}
              </button>
            ),
          )}
      </div>
    </>
  );
}

export default Posts;
