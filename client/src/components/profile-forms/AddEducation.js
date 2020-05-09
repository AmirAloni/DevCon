import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import {
  Button,
  TextField,
  Container,
  CssBaseline,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { buttonStyle, textFieldStyle, loginStyle } from "../Styles";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, history);
  };


  const txfStyle = textFieldStyle();
  const btnStyle = buttonStyle();
  const classes = loginStyle();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h1 className="large text-primary">Add Education</h1>
        <div className="m-1"></div>
        <form onSubmit={onSubmit}>
          <div className="m-1">
            <TextField
            type="text"
              label="School or Bootcamp"
              value={school}
              onChange={onChange}
              name="school"
              variant="outlined"
              className={txfStyle.medium}
              required
            />
          </div>
          <div className="m-1">
            <TextField
              label="Degree or Certificate"
              value={degree}
              onChange={onChange}
              name="degree"
              variant="outlined"
              className={txfStyle.medium}
              required
            />
          </div>
          <div className="m-1">
            <TextField
              label="Field of Study"
              value={fieldofstudy}
              onChange={onChange}
              name="fieldofstudy"
              variant="outlined"
              className={txfStyle.medium}
              required
            />
          </div>
          <div className="m-1">
            <h4>From Date</h4>
            <TextField
              type="date"
              value={from}
              onChange={onChange}
              name="from"
              variant="outlined"
              className={txfStyle.small}
            />
          </div>
          <div className="m-1">
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
              label="Current School"
            />
          </div>
          <div className="m-1">
            <h4>To Date</h4>
            <TextField
              type="date"
              value={to}
              value={to}
              onChange={(e) => onChange(e)}
              disabled={toDateDisabled ? "disabled" : ""}
              name="to"
              variant="outlined"
              className={txfStyle.small}
            />
          </div>
          <div>
            <TextField
              label="Program Description"
              multiline
              rows={8}
              fullWidth
              variant="outlined"
              name="description"
              value={description}
              onChange={onChange}
            />
          </div>

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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
