import React, { useRef } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function CreatePost(props) {
  const title = useRef("");
  const contents = useRef("");

  return (
    <div>
      <form>
        <input ref={title} placeholder="Post Title" />
        <textarea ref={contents} placeholder="Post Contents" />
        <button
          onClick={e => {
            e.preventDefault();
            props.addPost({
              title: title.current.value,
              contents: contents.current.value
            });
            props.history.push("/");
          }}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
export default connect(
  state => state,
  actionCreators
)(CreatePost);
