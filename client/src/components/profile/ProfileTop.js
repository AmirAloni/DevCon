import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className='profile-top bgimage p-2'>
        <div>
        <img className='round-img my-1' src={avatar} alt='' />
      </div>
      <div>
      <h1 className='large'>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <p className='lead'>
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x' />
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x' />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x' />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x' />
          </a>
        )}
      </div>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
