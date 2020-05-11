import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  lightBlue,
  blueGrey,
  red,
  blue,
  grey,
  pink,
  indigo,
} from "@material-ui/core/colors";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  const buttonStyle = makeStyles({
    profileItems: {
      backgroundColor: blueGrey[400],
      color: blueGrey[50],
    },
    primary: {
      backgroundColor: blueGrey[500],
      color: blueGrey[50],
      minHeight: "40px",
      margin: "5px",
    },
    secondary: {
      backgroundColor: blue[300],
      color: blue[50],
      minHeight: "40px",
      margin: "5px",
    },
    cancel: {
      backgroundColor: grey[500],
      color: grey[50],
      minHeight: "40px",
      margin: "5px",
    },
    delete: {
      backgroundColor: red[400],
      color: red[50],
      minHeight: "40px",
      margin: "5px",
    },
  });
  const linkStyle = makeStyles({
    main: {
      color: lightBlue[500],
      fontSize: 20,
      padding: "30px 30px 30px 30px"
    },
    smallWhite: {
      color: lightBlue[50],
      fontSize: 18,
      padding: "0px 10px 0px 10px",
      flexGrow: 1
    },
    bigWhite: {
      color: lightBlue[50],
      fontSize: 32,
      padding: "0px 10px 0px 10px",
      flexGrow: 1
    }
  });
  
  const lnkStyle = linkStyle();
  const btnStyle = buttonStyle();

  return (
    <div className="post-form">
      <h2>Discussion</h2>
      <hr className={lnkStyle.primary}></hr>
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
