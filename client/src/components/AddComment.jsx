import React, { useRef } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function AddComment(props) {
  const comment = useRef("");
  return (
    <div>
      <form>
        <input ref={comment} placeholder="Comment" />
        <button
          onClick={e => {
            e.preventDefault();
            props.addPostComment(props.match.params.id, comment.current.value);
            props.history.push = "/";
          }}
        >
          Add Comment
        </button>
      </form>
    </div>
  );
}
export default connect(
  state => state,
  actionCreators
)(AddComment);
