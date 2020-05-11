import { Link } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Landing = ({ isAuthenticated }) => {
  const landingStyle = makeStyles({
    pWhite: {
      color: lightBlue[50],
      fontSize: 24,
    },
    marginDiv: {
      margin: "30px 30px 30px 30px",
    },
    h1White: {
      color: lightBlue[50],
      fontSize: 50,
    },
    linkStyle: {
      color: lightBlue[500],
      fontSize: 20,
      padding: "30px 30px 30px 30px",
    },
  });

  const classes = landingStyle();

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className={classes.h1White}>Network for Developers</h1>
          <p className={classes.pWhite}>
            Create your developer profile, share posts, issues, and solutions
            with other developers.
          </p>
          <div className={classes.mrgnDiv}>
            <Link
              href="/register"
              className={classes.linkStyle}
              underline="none"
            >
              Sign Up
            </Link>
            <Link href="/login" className={classes.linkStyle} underline="none">
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
