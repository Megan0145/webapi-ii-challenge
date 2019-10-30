import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import axios from "axios";

export function Post({ post, deletePost }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${post.id}/comments`)
      .then(res => {
        setComments(res.data);
      })
      .catch(err => console.log(err));
  }, [post.id]);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.contents}</p>
      <p>{post.created_at}</p>
      <button onClick={() => deletePost(post.id)}>Delete Post</button>
      <button
        onClick={() => (window.location.pathname = `/addcomment/${post.id}`)}
      >
        {" "}
        Add a Comment
      </button>
      <div>
        <h3>{comments.length} Comments</h3>
        {comments.length
          ? comments.map(comment => (
              <div key={comment.id}>
                <p>{comment.text}</p>
              </div>
            ))
          : <p>Be the first to comment</p>}
      </div>
    </div>
  );
}
export default connect(
  state => state,
  actionCreators
)(Post);
