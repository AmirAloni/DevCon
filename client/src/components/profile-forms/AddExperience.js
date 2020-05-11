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

  const txfStyle = textFieldStyle();
  const btnStyle = buttonStyle();
  const classes = loginStyle();

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = (e) => {
      e.preventDefault();
      addExperience(formData, history);
    };

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
