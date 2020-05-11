import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import {
  Button,
  Select,
  MenuItem,
  TextField,
  Container,
  CssBaseline,
  Typography,
} from "@material-ui/core";
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
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const textFieldStyle = makeStyles({
    small: {
      fontSize: 18,
      minWidth: '200px'
    },
    medium: {
      fontSize: 18,
      minWidth: '400px'
    },
    big: {
      fontSize: 18,
      minWidth: '800px'
    }
  });
  
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

   const loginStyle = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: blue[300],
      color: blue[50],
      fontSize: 18
    },
    title:{
      color: blueGrey[500],
      fontSize: 45
    },
    link:{
      color: blue[300],
      fontSize: 14
    }
  }));

 const selectStyle = makeStyles({
    primary: {
      fontSize: 18,
      minWidth: '300px'
    }
  });

   const iconStyle = makeStyles({
    facebook: {
      color: blue[800]
    },
    instagram:{
      color: pink[200]
    },
    linkedin:{
      color: indigo[500]
    },
    web:{
      color: blueGrey[500]
    },
    twitter:{
      color: blue[500]
    },
    youtube:{
      color: red[500]
    }
  });
  const txfStyle = textFieldStyle();
  const btnStyle = buttonStyle();
  const classes = loginStyle();
  const slctStyle = selectStyle();
  const icnStyle = iconStyle();

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(", ");
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h1 className="large text-primary">Edit Your Profile</h1>
        <div className="m-1"></div>
        <form onSubmit={onSubmit}>
          <div className="m-1">
            <Select
              name="status"
              value={status}
              onChange={onChange}
              className={slctStyle.primary}
              variant="outlined"
              required
              label="Select Professional Status"
            >
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Junior Developer">Junior Developer</MenuItem>
              <MenuItem value="Senior Developer">Senior Developer</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Student or Learning">
                Student or Learning
              </MenuItem>
              <MenuItem value="Instructor">Instructor or Teacher</MenuItem>
              <MenuItem value="Intern">Intern</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </div>
          <div className="m-1">
            <TextField
              label="Company"
              value={company}
              onChange={onChange}
              name="company"
              variant="outlined"
              className={txfStyle.medium}
            />
          </div>
          <div className="m-1">
            <LanguageIcon className={icnStyle.web}></LanguageIcon>
            <TextField
              label="Website"
              value={website}
              onChange={onChange}
              name="website"
              variant="outlined"
              className={txfStyle.big}
            />
          </div>
          <div className="m-1">
            <TextField
              label="Location"
              value={location}
              onChange={onChange}
              name="location"
              variant="outlined"
              className={txfStyle.big}
            />
          </div>
          <div className="m-1">
            <TextField
              label="Skills"
              value={skills}
              onChange={onChange}
              name="skills"
              variant="outlined"
              className={txfStyle.big}
              required
            />
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className="m-1">
            <div>
              <TextField
                label="Github Username"
                value={githubusername}
                onChange={onChange}
                name="githubusername"
                variant="outlined"
                className={txfStyle.medium}
              />
            </div>
            <small className="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div>
            <TextField
              label="A short bio of yourself"
              multiline
              rows={8}
              fullWidth
              variant="outlined"
              name="bio"
              value={bio}
              onChange={onChange}
            />
          </div>

          <div className="my-2">
            <Button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              className={btnStyle.primary}
            >
              Add Social Network Links
            </Button>
          </div>

          {displaySocialInputs && (
            <Fragment>
              <div className="m-1 social-input">
                <TwitterIcon className={icnStyle.twitter}></TwitterIcon>
                <TextField
                  label="Twitter URL"
                  fullWidth
                  variant="outlined"
                  name="twitter"
                  value={twitter}
                  onChange={onChange}
                />
              </div>

              <div className="m-1 social-input">
                <FacebookIcon className={icnStyle.facebook}></FacebookIcon>
                <TextField
                  type="link"
                  label="Facebook URL"
                  fullWidth
                  variant="outlined"
                  name="facebook"
                  value={facebook}
                  onChange={onChange}
                />
              </div>

              <div className="m-1 social-input">
                <YouTubeIcon className={icnStyle.youtube}></YouTubeIcon>
                <TextField
                  label="YouTube URL"
                  fullWidth
                  variant="outlined"
                  name="youtube"
                  value={youtube}
                  onChange={onChange}
                />
              </div>

              <div className="m-1 social-input">
                <LinkedInIcon className={icnStyle.linkedin}></LinkedInIcon>
                <TextField
                  label="Linkedin URL"
                  fullWidth
                  variant="outlined"
                  name="linkedin"
                  value={linkedin}
                  onChange={onChange}
                />
              </div>

              <div className="m-1 social-input">
                <InstagramIcon className={icnStyle.instagram}></InstagramIcon>
                <TextField
                  label="Instagram URL"
                  fullWidth
                  variant="outlined"
                  name="instagram"
                  value={instagram}
                  onChange={onChange}
                />
              </div>
            </Fragment>
          )}

          <Button
            type="submit"
            variant="contained"
            className={btnStyle.secondary}
          >
            Submit
          </Button>
          <Button className={btnStyle.cancel} href="/dashboard">
            Go Back
          </Button>
        </form>
      </div>
    </Container>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(ProfileForm)
);
