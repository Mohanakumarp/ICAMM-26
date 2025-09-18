import React from 'react';
import ProfileCard from '../Comitte/profilecard';
import './speakers.css';
import rajesh from '../../images/rajesh.jpg';
import bhargav from '../../images/bhargav.jpg';
import bhakthi from '../../images/bhakthi.jpg';
import sushmitha from '../../images/sushmitha.jpg';
import kavikumar from '../../images/kavikumar.jpg';
import asadi from '../../images/asadi.png';
import sujatha from '../../images/sujatha.jpg';
import oscar from '../../images/oscar.jpg';
import selvanathan from '../../images/selvanathan.jpg';
import apoorva from '../../images/apoorva.jpg';
import john from '../../images/john.webp';


interface Speaker {
  id: number;
  photo: string;
  name: string;
  designation: string;
  organisation: string;
  link: string;
}

const speakers: Speaker[] = [
  {
    id: 6,
    photo: 'src/images/arnfried.jpg',
    name: 'Prof. Arnfried Kemnitz',
    designation: 'Department of Mathematics',
    organisation: 'Technische Universität Braunschweig, Germany',
    link: 'http://www.icm.tu-bs.de/~akemnitz/'
  },
  {
    id: 7,
    photo: 'src/images/asadis.jpg',
    name: 'Dr Asadi Srinivasulu',
    designation: 'IT Professor',
    organisation: 'University of Newcastle , Australia',
    link: 'https://www.newcastle.edu.au/profile/asadi-srinivasulu'
  },
  {
    id: 8,
    photo: sujatha,
    name: 'Dr Sujatha Ramdorai',
    designation: 'Mathematics Department',
    organisation: 'University of British Columbia, Canada',
    link: 'https://www.math.ubc.ca/~sujatha/'
  },
  {
    id: 1,
    photo: 'src/images/rajeshkumar.jpg',
    name: 'Prof. Rajesh Kumar',
    designation: 'Dept. of Electrical Engg',
    organisation: 'MNIT Jaipur and Dept. of Health Science, Univ. of Johannesburg, South Africa',
    link: 'https://www.researchgate.net/profile/Rajesh-Kumar-174'
  },
  {
    id: 5,
    photo: kavikumar,
    name: 'Dr Kavikumar Jacob',
    designation: 'Department of Mathematics and Statistics',
    organisation: 'Universiti Tun Hussein Onn Malaysia',
    link: 'https://www.uthm.edu.my/en/staff/kavikumar-jacob-4933'
  },
  {
    id: 10,
    photo: oscar,
    name: 'Prof. Oscar Castillo',
    designation: 'Professor of Computer Science',
    organisation: 'Tijuana Institute of Technology, Tijuana, Mexico',
    link: 'https://www.researchgate.net/profile/Oscar-Castillo-2'
  },
  {
    id: 11,
    photo: selvanathan,
    name: 'Dr Selvanathan Sivalingam',
    designation: 'Technology Leader – Digitalization',
    organisation: 'Trondheim, Trøndelag, Norway',
    link: 'https://www.linkedin.com/in/selvanathansivalingam/'
  },
  {
    id: 12,
    photo: apoorva,
    name: 'Dr Apoorva khare',
    designation: 'Associate Professor, Department of Mathematics',
    organisation: 'Indian Institute of Science, Bengaluru',
    link: 'https://math.iisc.ac.in/~apoorva/'
  },
  {
    id: 3,
    photo: 'src/images/bhakthimanna.webp',
    name: 'Prof Bhakti Bhusan Manna',
    designation: 'Department of Mathematics',
    organisation: 'Indian Institute of Technology Hyderabad',
    link: 'https://math.iith.ac.in/~bbmanna/'
  },
  {
    id: 2,
    photo: bhargav,
    name: 'Prof K. Bhargav Kumar ',
    designation: 'Department of Mathematics',
    organisation: 'Birla Institute of Technology & Science, Pilani Hyderabad Campus',
    link: 'https://www.bits-pilani.ac.in/pilani/faculty/Prof_K_Bhargav_Kumar.web'
  },
  {
    id: 9,
    photo: john,
    name: 'Dr John Rozario Jegaraj',
    designation: 'Technology Director & Senior Scientist (G)',
    organisation: 'DRDO , India',
    link: 'https://www.drdo.gov.in/labs-establishments/research-centre-imarat-rci'
  },
  {
    id: 4,
    photo: 'src/images/sushmithap.jpg',
    name: 'Dr. Sushmitha. P',
    designation: 'Department of Mathematics',
    organisation: 'Indian Institute of Technology Patna',
    link: 'https://www.iitp.ac.in/people/faculty/sushmitha-p'
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
              knowMoreLink={speaker.link}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Speakers;