import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {lightBlue, blueGrey, red, blue, grey, pink, indigo} from '@material-ui/core/colors';

const DashboardActions = () => {
  
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
  const btnStyle = buttonStyle();
  
  return (
    <div className='dash-buttons'>
      <Button href='/edit-profile' className={btnStyle.primary}>
        Edit Profile
      </Button>
      <Button href='/add-experience' className={btnStyle.primary}>
        Add Experience
      </Button>
      <Button href='/add-education' className={btnStyle.primary}>
        Add Education
      </Button>
    </div>
  );
};

export default DashboardActions;