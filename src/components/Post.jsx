import React, { Component } from "react";
import Modal from "./Modal";

import Card from "./Card";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      showComments: false,
      comments: []
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleCommentsToggle = this.handleCommentsToggle.bind(this);
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
      showComments: !this.state.showComments
    });
  }

  getComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(body => {
        this.setState({ comments: body });
      });
  }

  render() {
    const { post, users, onDelete } = this.props;
    const { openModal, comments, showComments } = this.state;
    return (
      <section className="posts">
        <Card
          post={post}
          users={users}
          onDelete={onDelete}
          onToggle={this.handleToggle}
        />
        <Modal
          toggleComments={this.handleCommentsToggle}
          showComments={showComments}
          active={openModal}
          comments={comments}
          post={post}
          closeModal={this.handleToggle}
        />
      </section>
    );
  }
}

export default Post;
