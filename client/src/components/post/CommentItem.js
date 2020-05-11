import { Button } from "@material-ui/core";
import { blue, blueGrey, grey, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
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
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <Button
            onClick={() => deleteComment(postId, _id)}
            className={btnStyle.delete}
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};
CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
