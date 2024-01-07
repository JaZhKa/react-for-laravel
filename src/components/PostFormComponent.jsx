function PostFormComponent(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className="space-y-8">
        <div className="mb-3">
          <label className="mb-1 block pr-4 text-start font-bold text-gray-500">
            Title
          </label>
          <input
            name="title"
            type="text"
            id="title"
            placeholder="Title"
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
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
            onChange={(e) => props.setContent(e.target.value)}
            value={props.content}
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
            value={props.image}
            onChange={(e) => props.setImage(e.target.value)}
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block pr-4 text-start font-bold text-gray-500">
            Category
          </label>
          <select
            value={props.category}
            onChange={(e) => props.setCategory(e.target.value)}
            className="w-full appearance-auto rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          >
            {props.isLoaded &&
              props.categories.map((category) => (
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
              props.setTag(value);
            }}
            className="w-full appearance-auto rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          >
            {props.isLoaded &&
              props.allTags.map((tag) => (
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
  )
}
export default PostFormComponent