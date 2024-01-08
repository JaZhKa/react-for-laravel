import { useEffect } from "react";
import usePostContext from "./../context/PostContext";
import PostFormComponent from "../components/PostFormComponent";

function NewPost() {
  const {
    getCategoriesAndTags,
    setTitle,
    setContent,
    setImage,
    setCategory,
    setTag,
    categories,
    allTags,
    isLoaded,
    handleSubmitNewPost,
  } = usePostContext();

  useEffect(() => {
    getCategoriesAndTags();
  }, [isLoaded]);

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
        handleSubmit={handleSubmitNewPost}
      >
        <span>Add</span>
      </PostFormComponent>
    </div>
  );
}

export default NewPost;
