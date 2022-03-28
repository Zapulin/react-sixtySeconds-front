import React, { Component } from 'react'
import posts from '../Samples/posts.json'


//Components
import Post from './Post'

export default class Posts extends Component {

  state = {
    posts: posts
  }

  render() {
    return posts.map(post => 
    <Post post={post} key={post.id}/>);
  }
}
