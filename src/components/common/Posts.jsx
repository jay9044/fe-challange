import React from "react";
import Post from "./Post";
const Posts = ({ posts, onDelete, users }) => {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} users={users} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Posts;
