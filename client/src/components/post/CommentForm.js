import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";
import { Button } from "@material-ui/core";
import { buttonStyle, lineStyle } from "../Styles";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  const btnStyle = buttonStyle();
  const lnStyle = lineStyle();

  return (
    <div className="post-form">
      <h2>Discussion</h2>
      <hr className={lnStyle.primary}></hr>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Add comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Button type="submit" className={btnStyle.primary}>
          Submit
        </Button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
