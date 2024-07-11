import { useContext } from "react";
import Post from "./Post";
import { PostList as PostLiatData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostLiatData);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
