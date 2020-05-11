import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Link } from "@material-ui/core";
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

const Landing = ({ isAuthenticated }) => {
  
  const pWhite = makeStyles({
    root: {
      color: lightBlue[50],
      fontSize: 24
    }
  });
  
   const h1White = makeStyles({
      root: {
        color: lightBlue[50],
        fontSize: 50
      }
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
  
  
     const marginDiv = makeStyles({
      root: {
        margin: '30px 30px 30px 30px'
      }
    });
    
    const pW = pWhite();
    const h1W = h1White();
    const lnkStyle = linkStyle();
    const mrgnDiv = marginDiv();

    if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className={h1W.root}>Network for Developers</h1>
          <p className={pW.root}>
            Create your developer profile, share posts, issues, and solutions
            with other developers.
          </p>
          <div className={mrgnDiv.root}>
            <Link
              href="/register"
              className={linkStyle().main}
              underline="none"
            >
              Sign Up
            </Link>
            <Link href="/login" className={lnkStyle.main} underline="none">
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
