function PostComponent(post) {
  return (
    <li>
      <div className='w-full rounded overflow-hidden shadow-lg'>
        <img className='w-full' src={post.post.image} alt='Image' />
        <div className='px-6 py-4 relative'>
          <div className='text-xs mb-2 text-gray-200 absolute top-0 left-0 p-1 inline-block bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-br-lg'>
            {post.post.category_id.title}
          </div>
          <div className='font-bold text-xl my-5 tracking-widest text-gray-900'>
            {post.post.title}
          </div>
          <p className='text-gray-800 text-base tracking-wide my-3'>
            {post.post.content}
          </p>
        </div>
        <div className='text-gray-800 text-sm cursor-pointer'>
          ❤️ {post.post.likes ? post.post.likes : 0}
        </div>
        <ul className='px-6 pt-4 pb-2'>
          {post.post.tags.map((tag) => (
            <li
              key={tag.id}
              className='inline-block bg-gray-200 hover:bg-gray-400 cursor-pointer rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2'
            >
              #{tag.title}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default PostComponent;
