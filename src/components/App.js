import React, { Component } from "react";
import Posts from "./common/Posts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getPosts();
    this.getUsers();
  }

  getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(body => {
        this.setState({ posts: body });
      });
  }
  getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(body => {
        this.setState({ users: body });
      });
  }

  handleDelete(post) {
    const posts = this.state.posts.filter(j => j.id !== post.id);
    this.setState({
      posts
    });
  }

  render() {
    const { posts, users } = this.state;

    return (
      <div className="App">
        <Posts onDelete={this.handleDelete} users={users} posts={posts} />
      </div>
    );
  }
}

export default App;
