
import React from 'react';
import ProfileCard from '../Comitte/profilecard';
import './speakers.css';
import rajesh from '../../images/rajesh.jpg';
import bhargav from '../../images/bhargav.jpg';
import bhakthi from '../../images/bhakthi.jpg';
import sushmitha from '../../images/sushmitha.jpg';
import kavikumar from '../../images/kavikumar.jpg';
import arnfried from '../../images/arnfried.png';
import asadi from '../../images/asadi.png';
import sujatha from '../../images/sujatha.png';

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
    photo: rajesh,
    name: 'Prof. Rajesh Kumar',
    designation: 'Dept. of Electrical Engg',
    organisation: 'MNIT Jaipur and Dept. of Health Science, Univ. of Johannesburg, South Africa'
  },
  {
    id: 2,
    photo: bhargav,
    name: 'Prof K. Bhargav Kumar ',
    designation: 'Department of Mathematics',
    organisation: 'Birla Institute of Technology & Science, Pilani Hyderabad Campus'
  },
  {
    id: 3,
    photo: bhakthi,
    name: 'Prof Bhakti Bhusan Manna',
    designation: 'Department of Mathematics',
    organisation: 'Indian Institute of Technology Hyderabad'
  },
  {
    id: 4,
    photo: sushmitha,
    name: 'Dr. Sushmitha. P',
    designation: 'Department of Mathematics',
    organisation: 'Indian Institute of Technology Patna'
  },
  {
    id: 5,
    photo: kavikumar,
    name: 'Dr Kavikumar Jacob',
    designation: 'Department of Mathematics and Statistics',
    organisation: 'Universiti Tun Hussein Onn Malaysia, Malaysia'
  },
  {
    id: 6,
    photo: arnfried,
    name: 'Prof. Arnfried Kemnitz',
    designation: 'Department of Mathematics',
    organisation: 'Technische Universität Braunschweig, Germany'
  },
  {
    id: 7,
    photo: asadi,
    name: 'Dr Asadi Srinivasulu',
    designation: 'IT Professor',
    organisation: 'University of Newcastle , Australia'
  },
  {
    id: 8,
    photo: sujatha,
    name: 'Dr Sujatha Ramdorai',
    designation: 'Mathematics Department',
    organisation: 'University of British Columbia, Canada'
  }
];

const Speakers: React.FC = () => {
  return (
    <div className="page-wrapper">
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
    </div>
  );
};

export default Speakers;