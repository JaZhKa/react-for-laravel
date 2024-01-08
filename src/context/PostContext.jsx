import { createContext, useContext, useState } from "react";
import axios from "./../api/axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const PostContext = createContext({});

export const PostProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [createData, setCreateData] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [allTags, setAllTags] = useState([]);
  const [tags, setTag] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState("");
  const navigate = useNavigate();

  const getCategoriesAndTags = async () => {
    try {
      await axios
        .get("api/posts/create", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
          },
        })
        .then((res) => setCreateData(res.data));
      if (createData) {
        setCategories(createData.categories);
        setAllTags(createData.tags);
        setIsLoaded(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitNewPost = async (e) => {
    e.preventDefault();
    const data = {
      title,
      content,
      image,
      category: { id: parseInt(category) },
      tags: tags.map((tag) => ({
        id: parseInt(tag),
      })),
      user_id: user.id,
    };
    try {
      await axios.post("api/posts", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
    navigate("/posts");
  };

  const handleSubmitEditPost = async (e) => {
    e.preventDefault();
    const id = post.data.data.id;
    const data = {
      title: title ? title : post?.data.data.title,
      content: content ? content : post?.data.data.content,
      image: image ? image : post?.data.data.image,
      category: { id: parseInt(category) },
      tags: tags.map((tag) => ({
        id: parseInt(tag),
      })),
      user_id: user.id,
    };
    try {
      await axios.patch(`api/posts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
    navigate("/posts");
  };

  const getPost = async (id) => {
    try {
      await axios
        .get(`api/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
          },
        })
        .then((res) => setPost(res));
    } catch (error) {
      console.error(error);
    }
    navigate("/edit_post");
  };

  return (
    <PostContext.Provider
      value={{
        user,
        title,
        setTitle,
        content,
        setContent,
        image,
        setImage,
        createData,
        setCreateData,
        categories,
        setCategories,
        category,
        setCategory,
        allTags,
        setAllTags,
        tags,
        setTag,
        isLoaded,
        setIsLoaded,
        getCategoriesAndTags,
        handleSubmitNewPost,
        handleSubmitEditPost,
        post,
        getPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default function usePostContext() {
  return useContext(PostContext);
}
