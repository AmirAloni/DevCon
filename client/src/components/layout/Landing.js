import { Link } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const Landing = ({ isAuthenticated }) => {
  const landingStyle = makeStyles({
    pWhite: {
      color: lightBlue[50],
      fontSize: 24,
    },
    h1White: {
      color: lightBlue[50],
      fontSize: 50,
    },
    linkStyle: {
      color: lightBlue[500],
      fontSize: 20,
      margin: '1rem'
    }
  });

  const classes = landingStyle();

  if (isAuthenticated) {
    return <Redirect to="/posts" />;
  }

  return (
    <section className="landing">
    <Container component="main" maxWidth="lg">
      <CssBaseline />{" "}
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className={classes.h1White}>Network for Developers</h1>
          <p className={classes.pWhite}>
            Create your developer profile, share posts, issues, and solutions
            with other developers.
          </p>
          <div className="text-center m-2">
            <Link
              href="/register"
              className={classes.linkStyle}
              underline="none"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className={classes.linkStyle}
              underline="none"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </Container>
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
