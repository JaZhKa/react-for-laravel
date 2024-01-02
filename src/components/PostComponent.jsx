function PostComponent(post) {
  return (
    <li>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-full' src={post.post.image} alt='Image' />
        <div className='px-6 py-4'>
          <div className='text-sm mb-2'>{post.post.category_id.title}</div>
          <div className='font-bold text-xl mb-2'>{post.post.title}</div>
          <p className='text-gray-700 text-base'>{post.post.content}</p>
        </div>
        <div>{post.post.likes}</div>
        <ul className='px-6 pt-4 pb-2'>
          {post.post.tags.map((tag) => (
            <li
              key={tag.id}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
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
