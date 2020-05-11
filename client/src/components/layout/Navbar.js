import { Link } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const linkStyle = makeStyles({
    main: {
      color: lightBlue[500],
      fontSize: 20,
      padding: "30px 30px 30px 30px",
    },
    smallWhite: {
      color: lightBlue[50],
      fontSize: 18,
      padding: "0px 10px 0px 10px",
      flexGrow: 1,
    },
    bigWhite: {
      color: lightBlue[50],
      fontSize: 32,
      padding: "0px 10px 0px 10px",
      flexGrow: 1,
    },
  });
  const lnkStyle = linkStyle();

  const authLinks = (
    <ul>
      <li>
        <Link href="/profiles" className={lnkStyle.smallWhite} underline="none">
          Developers
        </Link>
      </li>
      <li>
        <Link href="/posts" className={lnkStyle.smallWhite} underline="none">
          Posts
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard"
          className={lnkStyle.smallWhite}
          underline="none"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          onClick={logout}
          href="/"
          className={lnkStyle.smallWhite}
          underline="none"
        >
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link href="/profiles" className={lnkStyle.smallWhite} underline="none">
          Developers
        </Link>
      </li>
      <li>
        <Link href="/register" className={lnkStyle.smallWhite} underline="none">
          Register
        </Link>
      </li>
      <li>
        <Link href="/login" className={lnkStyle.smallWhite} underline="none">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link href="/" className={lnkStyle.bigWhite} underline="none">
          DevCon
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
