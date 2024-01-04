function PostComponent(post) {
  return (
    <li>
      <div className="w-full overflow-hidden rounded shadow-lg">
        <img className="w-full" src={post.post.image} alt="Image" />
        <div className="relative px-6 py-4">
          <div className="absolute left-0 top-0 mb-2 inline-block rounded-br-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 text-xs text-gray-200">
            {post.post.category_id.title}
          </div>
          <div className="my-5 text-xl font-bold tracking-widest text-gray-900">
            {post.post.title}
          </div>
          <p className="my-3 text-base tracking-wide text-gray-800">
            {post.post.content}
          </p>
        </div>
        <div className="cursor-pointer text-sm text-gray-800">
          ❤️ {post.post.likes ? post.post.likes : 0}
        </div>
        <ul className="px-6 pb-2 pt-4">
          {post.post.tags.map((tag) => (
            <li
              key={tag.id}
              className="mb-2 mr-2 inline-block cursor-pointer rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-400"
            >
              #{tag.title}
            </li>
          ))}
        </ul>
        <dir className="mr-2 text-right text-sm font-light italic tracking-tight text-gray-400">
          By {post.post.user_id.name}
        </dir>
      </div>
    </li>
  );
}

export default PostComponent;
