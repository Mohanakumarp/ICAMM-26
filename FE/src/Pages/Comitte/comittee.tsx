import ProfileCardSimple from './profilecardSimple';
import './committee.css';
import * as images from '../../images';

const committeeMembers = [
  {
    photo: images.trustee,
    name: 'Shri L Gopalakrishnan',
    designation: 'Managing Trustee',
    organisation: "PSG & Sons' Charities Trust",
    knowMoreLink: '',
    position: 'PATRON'
  },
  {
    photo: images.principal,
    name: 'Dr K Prakasan',
    designation: 'Principal',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: 'CO - PATRON'
  },
  {
    photo: images.hod_maths,
    name: 'Dr C Porkodi',
    designation: 'Professor and Head, Department of Mathematics',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: 'CONVENOR'
  },
  {
    photo: images.rsl,
    name: 'Dr R Subalakshmi',
    designation: 'Assistant Professor (Sl. Gr.), Department of Mathematics',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: 'ORGANISING SECRETARY'
  },
  // Add more members as needed
];


const advisoryCommittee = [
  {
    photo: images.john,
    name: 'Dr. John Rozario Jegaraj',
    designation: 'Technology Director & Senior Scientist (G) ',
    organisation: 'DRDO , India',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.pandian,
    name: 'Dr. Pandian P.S.',
    designation: 'Scientist, Defence Bioengineering and Electromedical Laboratory',
    organisation: 'DRDO , India',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.sankar,
    name: 'Dr. CH. N. A. B. Sankar',
    designation: 'Scientist, Research Centre Imarat',
    organisation: 'DRDO , India',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.arumuganathan,
    name: 'Dr. Arumuganathan R',
    designation: 'Professor , Department of Mathematics',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: ''
  },
];

const technicalCommittee = [
  {
    photo: images.mahesh,
    name: 'Dr. Maheshanand',
    designation: 'Professor and Head of the Department of Mathematics',
    organisation: 'IIIT Roorkee',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.abhay,
    name: 'Dr. Abhay Kumar Singh',
    designation: 'Associate Professor, Department of Mathematics and Computing',
    organisation: 'IIT (ISM), Dhanbad',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.rubell,
    name: 'Dr. Rubell Marion Lincy George',
    designation: 'Assistant Professor & Head - Department of Computer Science and Engineering',
    organisation: 'IIIT Kottayam',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.amalanjosephantony_1,
    name: 'Dr. Amalan Joseph Antony A',
    designation: 'Assistant Professor',
    organisation: 'IIITDM Kancheepuram',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.drsgkManikandan,
    name: 'Dr. Manikandan SGK',
    designation: 'Scientist',
    organisation: 'ISRO',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.joseph,
    name: 'Dr. Joseph Winston ',
    designation: 'Scientist',
    organisation: 'IGCAR',
    knowMoreLink: '',
    position: ''
  },
];

const Committee = () => {
  return (
    <>
      <section className="committee-simple-section">
        <h1 className="section-title">Organising Committee</h1>
        <div className="committee-simple-grid organising-committee-grid">
          {committeeMembers.map((member, idx) => (
            <ProfileCardSimple
              key={idx}
              photo={member.photo}
              name={member.name}
              designation={member.designation}
              organisation={member.organisation}
              knowMoreLink={member.knowMoreLink}
              position={member.position}
            />
          ))}
        </div>
      </section>

      <section className="committee-simple-section">
        <h1 className="section-title">Advisory Committee</h1>
        <div className="committee-simple-grid advisory-committee-grid">
          {advisoryCommittee.map((member, idx) => (
            <ProfileCardSimple
              key={idx}
              photo={member.photo}
              name={member.name}
              designation={member.designation}
              organisation={member.organisation}
              knowMoreLink={member.knowMoreLink}
              position={member.position}
            />
          ))}
        </div>
      </section>

      <section className="committee-simple-section">
        <h1 className="section-title">Technical Committee</h1>
        <div className="committee-simple-grid technical-committee-grid">
          {technicalCommittee.map((member, idx) => (
            <ProfileCardSimple
              key={idx}
              photo={member.photo}
              name={member.name}
              designation={member.designation}
              organisation={member.organisation}
              knowMoreLink={member.knowMoreLink}
              position={member.position}
            />
          ))}
        </div>
      </section>

      {/* Organising Committees with toggle buttons */}
      <section className="committee-simple-section organising-committees-section">
        
        <OrganisingCommittees />
      </section>
    </>
  );
};

// Organising committees data and component
const organisingCommitteesData: { title: string; members: string[] }[] = [
  {
    title: 'Programme Committee',
    members: [
      'Dr.B.Sridevi (Advisor)',
      'Dr.R.Rajasudha (Convener)',
      'Dr.M.Sumathi',
      'Ms.S.T.Padmalakshmi',
      'Dr.V.Deepa',
    ],
  },
  {
    title: 'Proceedings Committee',
    members: [
      'Dr.T.Vasanthi (Advisor)',
      'Dr.A. Muthulakshmi (Convener)',
      'Dr.C.K.Deena Merit',
      'Dr.D.Kiruthika',
      'Dr.R.Syama',
      'Ms.R.Brindha',
    ],
  },
  {
    title: 'Funding and Finance Committee',
    members: [
      'Dr.M.Haridass (Advisor)',
      'Dr.R.Deena (Convener)',
      'Dr.P.Sathyakala',
      'Dr.Ragi Krishnan',
      'Ms.G.Tamilselvi',
    ],
  },
  {
    title: 'Hall Arrangements Committee',
    members: [
      'Dr.K.Sangavai (Advisor)',
      'Dr.M. Bagyalakshmi (Convener)',
      'Dr.P.Sathyakala',
      'Dr.C.K.Deena Merit',
      'Dr.D.Kiruthika',
      'Dr.R.Syama',
    ],
  },
  {
    title: 'Registration Committee',
    members: [
      'Dr.R. Bindhu (Convener)',
      'Dr.Ragi Krishnan',
      'Dr.V.Deepa',
      'Ms.G.Tamilselvi',
      'Ms.R.Brindha',
    ],
  },
  {
    title: 'Publicity Committee',
    members: [
      'Dr.P.Muthukumar (Advisor)',
      'Ms.M.Radhiga (Convener)',
      'Dr.R.Syama',
      'Dr.K.Anukiruthika',
    ],
  },
  {
    title: 'Hospitality Committee',
    members: [
      'Dr.P.Muthukumar (Advisor)',
      'Dr.J.Narayanasamy (Convener)',
      'Mr.K.Saravanan',
      'Dr.J.Palraj',
      'Dr.K.Anukiruthika',
    ],
  },
];

import React, { useState } from 'react';

const OrganisingCommittees: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="organising-committees">
      {organisingCommitteesData.map((c, i) => (
        <div className="organising-committee" key={c.title}>
          <button
            className="org-committee-toggle"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            {c.title}
            <span className="org-toggle-indicator">{openIndex === i ? '−' : '+'}</span>
          </button>
          {openIndex === i && (
            <ul className="org-committee-members">
              {c.members.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Committee;
