import React from 'react';
import './profilecard.css';

interface ProfileCardProps {
  photo: string;
  name: string;
  designation: string;
  organisation: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ photo, name, designation, organisation }) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <div className="profile-photo-container">
          <img src={photo} alt={name} className="profile-photo" />
        </div>
      </div>
        <div className="card-body">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-designation" dangerouslySetInnerHTML={{ __html: designation }}></p>
        <p className="profile-organisation">{organisation}</p>
      </div>
      
      <div className="card-footer">
        <div className="decorative-line"></div>
      </div>
    </div>
  );
};

export default ProfileCard;
