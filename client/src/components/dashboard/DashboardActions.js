import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {buttonStyle} from '../Styles'

const DashboardActions = () => {
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