import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { Container, CssBaseline, Button } from '@material-ui/core';
import {buttonStyle} from '../Styles'


const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const btnStyle = buttonStyle();


  return (
    <Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <h1 className="large text-primary">{user && user.name.charAt(0).toUpperCase() + user.name.slice(1)}'s Dashboard</h1>

      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          {profile.experience.length > 0 ? <Experience experience={profile.experience} />:<div></div>}
          {profile.education.length > 0 ? <Education education={profile.education} />:<div></div>}

          <div className="my-2">
            <Button className={btnStyle.delete} onClick={() => deleteAccount()}>
               Delete My Account
            </Button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}    </Container>
  </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
 //