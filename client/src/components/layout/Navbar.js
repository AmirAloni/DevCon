import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import { Link } from '@material-ui/core';
import {linkStyle} from '../Styles'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link href='/profiles' className={linkStyle().smallWhite} underline='none'>Developers</Link>
      </li>
      <li>
        <Link href='/posts' className={linkStyle().smallWhite} underline='none'>Posts</Link>
      </li>
      <li>
        <Link href='/dashboard' className={linkStyle().smallWhite} underline='none'>Dashboard</Link>
      </li>
      <li>
        <Link onClick={logout} href='/' className={linkStyle().smallWhite} underline='none'>Logout</Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link href='/profiles' className={linkStyle().smallWhite} underline='none'>
          Developers
          </Link>
      </li>
      <li>
        <Link href='/register' className={linkStyle().smallWhite} underline='none'>
          Register
          </Link>
      </li>
      <li>
        <Link href='/login' className={linkStyle().smallWhite} underline='none'>
          Login
          </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link href='/' className={linkStyle().bigWhite} underline='none'>DevCon</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
