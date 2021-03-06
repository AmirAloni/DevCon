import { Button } from '@material-ui/core';
import { blue, blueGrey, grey, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import React from 'react';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  const buttonStyle = makeStyles({
    profileItems: {
      backgroundColor: blueGrey[400],
      color: blueGrey[50],
    },
    primary: {
      backgroundColor: blueGrey[500],
      color: blueGrey[50],
      minHeight: "40px",
      margin: "5px",
    },
    secondary: {
      backgroundColor: blue[300],
      color: blue[50],
      minHeight: "40px",
      margin: "5px",
    },
    cancel: {
      backgroundColor: grey[500],
      color: grey[50],
      minHeight: "40px",
      margin: "5px",
    },
    delete: {
      backgroundColor: red[400],
      color: red[50],
      minHeight: "40px",
      margin: "5px",
    },
  });
  const classes = buttonStyle();

  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Button href={`/profile/${_id}`} className={classes.profileItems}>
          View Profile
        </Button>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check" /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
