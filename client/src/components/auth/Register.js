//import React, { Fragment, useState } from 'react';
//import { connect } from 'react-redux';
//import { Link, Redirect } from 'react-router-dom';
//import { setAlert } from '../../actions/alert';
//import { register } from '../../actions/auth';
//import PropTypes from 'prop-types';
//
//const Register = ({ setAlert, register, isAuthenticated }) => {
//  const [formData, setFormData] = useState({
//    name: '',
//    email: '',
//    password: '',
//    password2: ''
//  });
//
//  const { name, email, password, password2 } = formData;
//
//  const onChange = e =>
//    setFormData({ ...formData, [e.target.name]: e.target.value });
//
//  const onSubmit = async e => {
//    e.preventDefault();
//    if (password !== password2) {
//      setAlert('Passwords do not match', 'danger');
//    } else {
//      register({ name, email, password });
//    }
//  };
//
//  if (isAuthenticated) {
//    return <Redirect to='/dashboard' />;
//  }
//
//  return (
//    <Fragment>
//      <h1 className='large text-primary'>Sign Up</h1>
//      <p className='lead'>
//        <i className='fas fa-user' /> Create Your Account
//      </p>
//      <form className='form' onSubmit={e => onSubmit(e)}>
//        <div className='form-group'>
//          <input
//            type='text'
//            placeholder='Name'
//            name='name'
//            value={name}
//            onChange={e => onChange(e)}
//          />
//        </div>
//        <div className='form-group'>
//          <input
//            type='email'
//            placeholder='Email Address'
//            name='email'
//            value={email}
//            onChange={e => onChange(e)}
//          />
//          <small className='form-text'>
//            This site uses Gravatar so if you want a profile image, use a
//            Gravatar email
//          </small>
//        </div>
//        <div className='form-group'>
//          <input
//            type='password'
//            placeholder='Password'
//            name='password'
//            value={password}
//            onChange={e => onChange(e)}
//          />
//        </div>
//        <div className='form-group'>
//          <input
//            type='password'
//            placeholder='Confirm Password'
//            name='password2'
//            value={password2}
//            onChange={e => onChange(e)}
//          />
//        </div>
//        <input type='submit' className='btn btn-primary' value='Register' />
//      </form>
//      <p className='my-1'>
//        Already have an account? <Link to='/login'>Sign In</Link>
//      </p>
//    </Fragment>
//  );
//};
//
//Register.propTypes = {
//  setAlert: PropTypes.func.isRequired,
//  register: PropTypes.func.isRequired,
//  isAuthenticated: PropTypes.bool
//};
//
//const mapStateToProps = state => ({
//  isAuthenticated: state.auth.isAuthenticated
//});
//
//export default connect(
//  mapStateToProps,
//  { setAlert, register }
//)(Register);


import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { register } from '../../actions/auth';
import {loginStyle} from '../Styles'
import { setAlert } from '../../actions/alert';


const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };


  const classes = loginStyle();

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.title}>
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={e => onChange(e)}
          /> 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => onChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => onChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Confirm Password"
            type="password"
            id="password2"
            autoComplete="current-password"
            value={password2}
            onChange={e => onChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href='/login' className={classes.link}>
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);