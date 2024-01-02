import { useEffect, useState } from "react";
import axios from "../api/axios";

function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [createData, setCreateData] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [allTags, setAllTags] = useState([]);
  const [tags, setTag] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getCategoriesAndTags = async () => {
    await axios
      .get("api/posts/create", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        },
      })
      .then((res) => setCreateData(res.data));
    if (createData) {
      await setCategories(createData.categories);
      await setAllTags(createData.tags);
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
    };
    await axios.post("api/posts", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });
  };

  useEffect(() => {
    getCategoriesAndTags();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label>Title</label>
          <input
            name='title'
            type='text'
            id='title'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label>Content</label>
          <textarea
            name='content'
            id='content'
            rows='3'
            placeholder='Content'
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        <div className='mb-3'>
          <label>Image</label>
          <input
            name='image'
            type='img'
            id='image'
            placeholder='image.jpeg'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={1}
            className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
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
          <label>Tags</label>
          <select
            multiple={true}
            onChange={(e) => {
              const options = [...e.target.selectedOptions];
              const value = options.map((option) => option.value);
              setTag(value);
            }}
            className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          >
            {isLoaded &&
              allTags.map((tag) => (
                <option value={tag.id} key={tag.id}>
                  {tag.title}
                </option>
              ))}
          </select>
        </div>
        <div className='md:w-2/3'>
          <button
            className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
            type='submit'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
