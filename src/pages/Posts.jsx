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
    <Link to='/new_post'>Add new post</Link>
      <ul>
        {isLoaded &&
          posts.data.map((post) => <PostComponent key={post.id} post={post} />)}
      </ul>
      {isLoaded &&
        posts.meta.links.map((link) => (
          <button key={link.label} onClick={() => getPosts(link.label)}>
            {link.active ? <strong>{link.label}</strong> : link.label}
          </button>
        ))}
    </>
  );
}

export default Posts;
