import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import PostFormComponent from "../components/PostFormComponent";

function NewPost() {
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

  const handleSubmit = async (e) => {
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
    await axios.post("api/posts", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });
    navigate("/posts");
  };

  useEffect(() => {
    getCategoriesAndTags();
  }, [createData]);

  return (
    <div>
      <PostFormComponent
        setTitle={setTitle}
        setContent={setContent}
        setImage={setImage}
        setCategory={setCategory}
        setTag={setTag}
        categories={categories}
        allTags={allTags}
        isLoaded={isLoaded}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default NewPost;
