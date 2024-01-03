import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

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
    };
    await axios.post("api/posts", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });
    navigate('/posts')
  };

  useEffect(() => {
    getCategoriesAndTags();
  }, [createData]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className='mb-3'>
          <label className='block text-gray-500 font-bold text-start mb-1 pr-4'>
            Title
          </label>
          <input
            name='title'
            type='text'
            id='title'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          />
        </div>
        <div className='mb-3'>
          <label className='block text-gray-500 font-bold text-start mb-1 pr-4'>
            Content
          </label>
          <textarea
            name='content'
            id='content'
            rows='3'
            placeholder='Content'
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          ></textarea>
        </div>
        <div className='mb-3'>
          <label className='block text-gray-500 font-bold text-start mb-1 pr-4'>
            Image
          </label>
          <input
            name='image'
            type='img'
            id='image'
            placeholder='image.jpeg'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          />
        </div>
        <div>
          <label className='block text-gray-500 font-bold text-start mb-1 pr-4'>
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='bg-gray-200 appearance-auto border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 outline'
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
          <label className='block text-gray-500 font-bold text-start mb-1 pr-4'>
            Tags
          </label>
          <select
            multiple={true}
            onChange={(e) => {
              const options = [...e.target.selectedOptions];
              const value = options.map((option) => option.value);
              setTag(value);
            }}
            className='bg-gray-200 appearance-auto border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 outline'
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
             className='shadow bg-gray-700 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
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
