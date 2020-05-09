import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import {
  Button,
  TextField,
  Container,
  CssBaseline,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import {
  buttonStyle,
  textFieldStyle,
  loginStyle
} from "../Styles";
const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = (e) => {
      e.preventDefault();
      addExperience(formData, history);
    };

    const txfStyle = textFieldStyle();
    const btnStyle = buttonStyle();
    const classes = loginStyle();

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <h1 className="large text-primary">Add Experience</h1>
      <div className="m-1"></div>
      <form onSubmit={onSubmit}>
        <div className="m-1">
          <TextField
            label="Job Title"
            value={title}
            onChange={onChange}
            name="title"
            variant="outlined"
            className={txfStyle.medium}
            required
          />
           </div>
           <div className="m-1">
            <TextField
            label="Company"
            value={company}
            onChange={onChange}
            name="company"
            variant="outlined"
            className={txfStyle.medium}
            required
          />
          </div>
          <div className="m-1">
            <TextField
            label="Location"
            value={location}
            onChange={onChange}
            name="location"
            variant="outlined"
            className={txfStyle.medium}
          />
        </div>
        <div className="m-1">
        <h4>From Date</h4>
            <TextField
            type='date'
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
        label="Current Job"
      />
        </div>
        <div className="m-1">
        <h4>To Date</h4>
            <TextField
            type='date'
            value={to}
            value={to}
            onChange={e => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
            name="to"
            variant="outlined"
            className={txfStyle.small}
          />
        </div>
        <div>    
          <TextField
            label="Job Description"
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


AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { addExperience }
)(withRouter(AddExperience));
