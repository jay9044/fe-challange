import React, { Component } from "react";

const Card = ({ post, users, onDelete, onToggle }) => {
  return (
    <div class="card">
      {users
        .filter(user => post.userId === user.id)
        .map(user => (
          <React.Fragment key={user.id}>
            <header class="card-header">
              <p class="card-header-title">{post.title}</p>
            </header>
            <div class="card-content">
              <div class="content">
                {post.body}
                <br />
                Author: <a href="#">@{user.name}</a>.
              </div>
            </div>
            <footer class="card-footer">
              <a
                href="#"
                class="card-footer-item"
                onClick={() => onDelete(post)}
              >
                Remove post from timeline
              </a>
              <a href="#" class="card-footer-item" onClick={onToggle}>
                See More
              </a>
            </footer>
          </React.Fragment>
        ))}
    </div>
  );
};

export default Card;
