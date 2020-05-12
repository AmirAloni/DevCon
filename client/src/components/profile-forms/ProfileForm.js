import {
  Button,
  Container,
  CssBaseline,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import {
  blue,
  blueGrey,
  grey,
  indigo,
  pink,
  red,
} from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createProfile, getCurrentProfile } from "../../actions/profile";

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
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const buttonStyle = makeStyles({
    primary: {
      backgroundColor: blueGrey[500],
      color: blueGrey[50],
      margin: "1rem",
    },
    secondary: {
      backgroundColor: blue[300],
      color: blue[50],
      margin: "1rem",
    },
    cancel: {
      backgroundColor: grey[500],
      color: grey[50],
      margin: "1rem",
    },
    delete: {
      backgroundColor: red[400],
      color: red[50],
      margin: "1rem",
    },
  });

  const loginStyle = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: blue[300],
      color: blue[50],
      fontSize: 18,
    },
    title: {
      color: blueGrey[500],
      fontSize: 45,
    },
    link: {
      color: blue[300],
      fontSize: 14,
    },
  }));

  const fontStyle = makeStyles({
    primary: {
      fontSize: 18,
    },
  });

  const iconStyle = makeStyles({
    facebook: {
      color: blue[800],
    },
    instagram: {
      color: pink[200],
    },
    linkedin: {
      color: indigo[500],
    },
    web: {
      color: blueGrey[500],
    },
    twitter: {
      color: blue[500],
    },
    youtube: {
      color: red[500],
    },
  });
  const fntStyle = fontStyle();
  const btnStyle = buttonStyle();
  const classes = loginStyle();
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
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <h1 className="large text-primary">Edit Your Profile</h1>
        <div className="m-1"></div>
        <form onSubmit={onSubmit}>
          <Select
            margin="normal"
            fullWidth
            name="status"
            value={status}
            onChange={onChange}
            className={fntStyle.primary}
            variant="outlined"
            required
            defaultValue="Developer"
          >
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Junior Developer">Junior Developer</MenuItem>
            <MenuItem value="Senior Developer">Senior Developer</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Student or Learning">Student or Learning</MenuItem>
            <MenuItem value="Instructor">Instructor or Teacher</MenuItem>
            <MenuItem value="Intern">Intern</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          <TextField
            margin="normal"
            fullWidth
            label="Company"
            value={company}
            onChange={onChange}
            name="company"
            variant="outlined"
            className={fntStyle.primary}
          />
          <LanguageIcon className={icnStyle.web}></LanguageIcon>
          <TextField
            margin="normal"
            fullWidth
            label="Website"
            value={website}
            onChange={onChange}
            name="website"
            variant="outlined"
            className={fntStyle.primary}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Location"
            value={location}
            onChange={onChange}
            name="location"
            variant="outlined"
            className={fntStyle.primary}
          />
          <div>
            <TextField
              margin="normal"
              fullWidth
              label="Skills"
              value={skills}
              onChange={onChange}
              name="skills"
              variant="outlined"
              className={fntStyle.primary}
              required
            />
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div>
            <TextField
              margin="normal"
              fullWidth
              label="Github Username"
              value={githubusername}
              onChange={onChange}
              name="githubusername"
              variant="outlined"
              className={fntStyle.primary}
            />
            <small className="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <TextField
            margin="normal"
            fullWidth
            label="A short bio of yourself"
            multiline
            rows={8}
            variant="outlined"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <Button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            margin="normal"
            className={btnStyle.primary}
          >
            Add Social Network Links
          </Button>

          {displaySocialInputs && (
            <Fragment>
              <TwitterIcon className={icnStyle.twitter}></TwitterIcon>
              <TextField
                margin="normal"
                fullWidth
                label="Twitter URL"
                variant="outlined"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />

              <FacebookIcon className={icnStyle.facebook}></FacebookIcon>
              <TextField
                margin="normal"
                fullWidth
                type="link"
                label="Facebook URL"
                variant="outlined"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />

              <YouTubeIcon className={icnStyle.youtube}></YouTubeIcon>
              <TextField
                margin="normal"
                fullWidth
                label="YouTube URL"
                variant="outlined"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />

              <LinkedInIcon className={icnStyle.linkedin}></LinkedInIcon>
              <TextField
                margin="normal"
                fullWidth
                label="Linkedin URL"
                variant="outlined"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />

              <InstagramIcon className={icnStyle.instagram}></InstagramIcon>
              <TextField
                margin="normal"
                fullWidth
                label="Instagram URL"
                variant="outlined"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </Fragment>
          )}
          <div className="text-center">
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
          </div>
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
