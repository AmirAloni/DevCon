import Button from "@material-ui/core/Button";
import { blue, blueGrey, grey, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import { Link } from "react-router-dom";

const PostForm = ({ addPost, user }) => {
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
  const btnStyle = buttonStyle();

  return (
    <div className="post-form">
      <form
        className="form my-2"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <div className="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user._id}`}>
              <img className="round-img " src={user.avatar} alt="" />
              <h4>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h4>
            </Link>
          </div>
          <div>
            <h4 className="text-primary">Create Post</h4>
            <textarea
              name="text"
              cols="30"
              rows="5"
              placeholder="Post something..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            <Button type="submit" className={btnStyle.primary}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { addPost })(PostForm);
