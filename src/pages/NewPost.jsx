import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

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
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="mb-3">
          <label className="mb-1 block pr-4 text-start font-bold text-gray-500">
            Title
          </label>
          <input
            name="title"
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          />
        </div>
        <div className="mb-3">
          <label className="mb-1 block pr-4 text-start font-bold text-gray-500">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            rows="3"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="mb-1 block pr-4 text-start font-bold text-gray-500">
            Image
          </label>
          <input
            name="image"
            type="img"
            id="image"
            placeholder="image.jpeg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block pr-4 text-start font-bold text-gray-500">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-auto rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          >
            {isLoaded &&
              categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.title}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block pr-4 text-start font-bold text-gray-500">
            Tags
          </label>
          <select
            multiple={true}
            onChange={(e) => {
              const options = [...e.target.selectedOptions];
              const value = options.map((option) => option.value);
              setTag(value);
            }}
            className="w-full appearance-auto rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          >
            {isLoaded &&
              allTags.map((tag) => (
                <option value={tag.id} key={tag.id}>
                  {tag.title}
                </option>
              ))}
          </select>
        </div>
        <div className="flex justify-start">
          <button
            className="focus:shadow-outline rounded bg-gray-700 px-4 py-2 font-bold text-white shadow hover:bg-gray-400 focus:outline-none"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
