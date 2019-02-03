import React from "react";
import Post from "../Post";
const Posts = ({ posts, onDelete, users }) => {
  return (
    <React.Fragment>
      {posts.map(post => (
        <Post key={post.id} post={post} users={users} onDelete={onDelete} />
      ))}
    </React.Fragment>
  );
};

export default Posts;
