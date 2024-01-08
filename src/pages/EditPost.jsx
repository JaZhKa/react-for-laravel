import { useEffect } from "react";
import PostFormComponent from "../components/PostFormComponent";
import usePostContext from "../context/PostContext";

function EditPost() {
  const {
    getCategoriesAndTags,
    createData,
    setTitle,
    setContent,
    setImage,
    setCategory,
    setTag,
    categories,
    allTags,
    isLoaded,
    handleSubmitEditPost,
    post,
  } = usePostContext();

  useEffect(() => {
    getCategoriesAndTags();
  }, [createData]);

  return (
    <div>
      <PostFormComponent
        post={post}
        setTitle={setTitle}
        setContent={setContent}
        setImage={setImage}
        setCategory={setCategory}
        setTag={setTag}
        categories={categories}
        allTags={allTags}
        isLoaded={isLoaded}
        handleSubmit={handleSubmitEditPost}
      >
        <span>Edit</span>
      </PostFormComponent>
    </div>
  );
}
export default EditPost;
