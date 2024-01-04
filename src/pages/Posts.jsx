import PostComponent from "../components/PostComponent";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPosts = async (page) => {
    await axios
      .get(`api/posts?page=${page}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        },
      })
      .then((res) => setPosts(res.data));
    setIsLoaded(true);
  };

  useEffect(() => {
    getPosts(1);
  }, []);

  return (
    <>
      <Link
        to='/new_post'
        className='absolute top-6 -left-28 shadow bg-gray-700 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
      >
        Add post
      </Link>
      <ul className='mb-8 flex flex-col space-y-10'>
        {isLoaded &&
          posts.data.map((post) => <PostComponent key={post.id} post={post} />)}
      </ul>
      <div className='flex justify-center space-x-4'>
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
                  "inline-block bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 px-2 rounded-full font-semibold " +
                  (link.active ? "bg-gray-300" : "")
                }
              >
                {link.active ? <strong>{link.label}</strong> : link.label}
              </button>
            )
          )}
      </div>
    </>
  );
}

export default Posts;
