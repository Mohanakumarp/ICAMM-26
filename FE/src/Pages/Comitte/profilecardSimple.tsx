import React from 'react';
import './profilecardSimple.css';

interface ProfileCardSimpleProps {
  photo: string;
  name: string;
  designation: string;
  organisation: string;
  knowMoreLink?: string;
  position?: string;
}

const ProfileCardSimple: React.FC<ProfileCardSimpleProps> = ({ photo, name, designation, organisation, knowMoreLink, position }) => {
  return (
    <div className="profile-card-simple">
      {position && (
        <div className="profile-position-header">{position}</div>
      )}
      <div className="profile-photo-simple-container">
        <img src={photo} alt={name} className="profile-photo-simple" />
      </div>
      <div className="profile-info-simple">
        <h2 className="profile-name-simple">{name}</h2>
        <p className="profile-designation-simple">{designation}</p>
        <p className="profile-organisation-simple">{organisation}</p>
        {knowMoreLink && (
          <a
            href={knowMoreLink}
            className="know-more-btn-simple"
            target="_blank"
            rel="noopener noreferrer"
          >
            Know More
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCardSimple;
