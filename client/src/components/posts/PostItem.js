import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import { Button } from '@material-ui/core';
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

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => {

  const buttonStyle = makeStyles({
    profileItems: {
      backgroundColor: blueGrey[400],
      color: blueGrey[50]
    },
    primary: {
      backgroundColor: blueGrey[500],
      color: blueGrey[50],
      minHeight: '40px',
      margin: '5px'
    },
    secondary:{
      backgroundColor: blue[300],
      color: blue[50],
      minHeight: '40px',
      margin: '5px'
    },
    cancel:{
      backgroundColor: grey[500],
      color: grey[50],
      minHeight: '40px',
      margin: '5px'
    },
    delete:{
      backgroundColor: red[400],
      color: red[50],
      minHeight: '40px',
      margin: '5px'
    }
  });
  const btnStyle = buttonStyle();

  return(
  <div className='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img className='round-img' src={avatar} alt='' />
        <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <Button
            onClick={() => addLike(_id)}
            className={btnStyle.secondary}
          >
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </Button>
          <Button
            onClick={() => removeLike(_id)}
            className={btnStyle.cancel}
          >
            <i className='fas fa-thumbs-down' />
          </Button>
          <Button href={`/posts/${_id}`} className={btnStyle.primary}>
            Show Comments{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Button>
          {!auth.loading && user === auth.user._id && (
            <Button
              onClick={() => deletePost(_id)}
              className={btnStyle.delete}
            >
              Delete
            </Button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
