import React, { Component } from "react";
import Modal from "./Modal";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      showComments: false,
      comments: []
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.getBadgeClasses = this.getBadgeClasses.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }
  handleToggle() {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  handleCommentsToggle() {
    this.setState({
      showComments: !this.state.comments
    });
  }

  //instead of fecthing on every press
  getComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(body => {
        this.setState({ comments: body });
      });
  }

  getBadgeClasses() {
    let classes = "modal-card-body";
    return classes;
  }

  render() {
    const { post, users, onDelete } = this.props;
    const { openModal, comments, showComments } = this.state;
    return (
      <div className="posts">
        {users.map(user => {
          if (post.userId === user.id) {
            return (
              <React.Fragment key={user.id}>
                <h2>Author: {user.name}</h2>
                <p>Post Title: {post.title}</p>
                <button className="btn-primary" onClick={() => onDelete(post)}>
                  Remove Post
                </button>
                <button className="btn-primary" onClick={this.handleToggle}>
                  See More
                </button>
                <Modal
                  getBadgeClasses={this.getBadgeClasses}
                  toggleComments={this.handleCommentsToggle}
                  showComments={showComments}
                  active={openModal}
                  comments={comments}
                  users={users}
                  post={post}
                  closeModal={this.handleToggle}
                />
              </React.Fragment>
            );
          }
        })}
      </div>
    );
  }
}

export default Post;