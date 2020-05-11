import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Link } from "@material-ui/core";
import { linkStyle, h1White, pWhite, marginDiv } from "../Styles";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className={h1White().root}>Network for Developers</h1>
          <p className={pWhite().root}>
            Create your developer profile, share posts, issues, and solutions
            with other developers.
          </p>
          <div className={marginDiv().root}>
            <Link
              href="/register"
              className={linkStyle().main}
              underline="none"
            >
              Sign Up
            </Link>
            <Link href="/login" className={linkStyle().main} underline="none">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
