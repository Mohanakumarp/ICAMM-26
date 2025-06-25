import React from 'react';
import ProfileCard from './profilecard';
import './speakers.css';

interface Speaker {
  id: number;
  photo: string;
  name: string;
  designation: string;
  organisation: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+1',
    name: 'XYZ Speaker 1',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 2,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+2',
    name: 'XYZ Speaker 2',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 3,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+3',
    name: 'XYZ Speaker 3',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 4,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+4',
    name: 'XYZ Speaker 4',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 5,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+5',
    name: 'XYZ Speaker 5',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 6,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+6',
    name: 'XYZ Speaker 6',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 7,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+7',
    name: 'XYZ Speaker 7',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 8,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+8',
    name: 'XYZ Speaker 8',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 9,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+9',
    name: 'XYZ Speaker 9',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 10,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+10',
    name: 'XYZ Speaker 10',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 11,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+11',
    name: 'XYZ Speaker 11',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  },
  {
    id: 12,
    photo: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=Speaker+12',
    name: 'XYZ Speaker 12',
    designation: 'XYZ Designation',
    organisation: 'XYZ Organisation'
  }
];

const Speakers: React.FC = () => {
  return (
    <div className="speakers-container">
      <div className="speakers-header">
        <h1 className="speakers-title">KEYNOTE SPEAKERS</h1>
        <p className="speakers-subtitle">Meet our distinguished keynote speakers who will share their expertise</p>
      </div>
      
      <div className="speakers-grid">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="speaker-card-wrapper">
            <ProfileCard
              photo={speaker.photo}
              name={speaker.name}
              designation={speaker.designation}
              organisation={speaker.organisation}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;