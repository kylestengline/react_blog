import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log("good time to call an action creator to fetch posts");
  }
  render() {
    return (
      <div>Lists of blog posts</div>
    );
  }
}

export default PostsIndex;
