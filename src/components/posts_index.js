import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    )
  }
}

// pass the action creator to connect inside of an object, { fetchPosts: fetchPosts }
// instead of using the mapDisptchToProps function --and use ES6 to condense { fetchPosts }
export default connect(null, { fetchPosts })(PostsIndex);
