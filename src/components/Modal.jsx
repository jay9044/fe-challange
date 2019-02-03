import React from "react";

const Modal = ({
  comments,
  post,
  active,
  closeModal,
  showComments,
  toggleComments
}) => {
  const filteredComments = comments
    .filter(comment => comment.postId === post.id)
    .map(comment => (
      <section key={comment.id}>
        <li>{comment.body}</li>
      </section>
    ));

  return (
    <div className={"modal" + (active ? "  is-active" : "")}>
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title model">{post.title}</p>
          <button className="delete" aria-label="close" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <h4 className="modal-title">Post Details</h4> {post.body}
          {showComments ? (
            <section className="modal-comments">
              <h4 className="modal-title">Comments</h4>
              {filteredComments}
            </section>
          ) : null}
        </section>
        <footer className="modal-card-foot">
          {showComments ? (
            <button onClick={toggleComments}>Hide comments</button>
          ) : (
            <button onClick={toggleComments}>See comments</button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Modal;
