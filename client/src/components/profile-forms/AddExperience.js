import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { blue, blueGrey, grey, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const fontStyle = makeStyles({
    primary: {
      fontSize: 18,
    },
  });

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

  const fntStyle = fontStyle();
  const btnStyle = buttonStyle();
  const classes = loginStyle();

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <h1 className="large text-primary">Add Experience</h1>
        <div className="m-1"></div>
        <form onSubmit={onSubmit}>
          <TextField
            margin="normal"
            fullWidth
            label="Job Title"
            value={title}
            onChange={onChange}
            name="title"
            variant="outlined"
            className={fntStyle.primary}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Company"
            value={company}
            onChange={onChange}
            name="company"
            variant="outlined"
            className={fntStyle.primary}
            required
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
          <h4>From Date</h4>
          <TextField
            margin="normal"
            fullWidth
            type="date"
            value={from}
            onChange={onChange}
            name="from"
            variant="outlined"
            className={fntStyle.primary}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={current}
                onChange={() => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
                name="current"
                value={current}
                color="primary"
              />
            }
            label="Current Job"
          />
          <h4>To Date</h4>
          <TextField
            margin="normal"
            fullWidth
            type="date"
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
            name="to"
            variant="outlined"
            className={fntStyle.primary}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Job Description"
            multiline
            rows={8}
            variant="outlined"
            name="description"
            className={fntStyle.primary}
            value={description}
            onChange={onChange}
          />

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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
