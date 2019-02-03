import React from "react";

const Modal = ({ comments, post, active, closeModal, getBadgeClasses }) => {
  return (
    <div className={"modal" + (active ? "  is-active" : "")}>
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title model">{post.title}</p>
          <button className="delete" aria-label="close" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          Post Details: {post.body}
          <h4>Comments</h4>
          {comments.map(comment => {
            if (comment.postId === post.id) {
              return (
                <div key={comment.id}>
                  <li>{comment.body}</li>
                </div>
              );
            }
          })}
        </section>
        <footer className="modal-card-foot">
          <button>See comments</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
