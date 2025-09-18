import ProfileCardSimple from './profilecardSimple';
import './committee.css';

const committeeMembers = [
  {
    photo: '/src/images/trustee.jpg',
    name: 'Shri L Gopalakrishnan',
    designation: 'Managing Trustee',
    organisation: "PSG & Sons' Charities Trust",
    knowMoreLink: '',
    position: 'PATRON'
  },
  {
    photo: '/src/images/principal.jpg',
    name: 'Dr K Prakasan',
    designation: 'Principal',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: 'CO - PATRON'
  },
  {
    photo: '/src/images/hod_maths.jpeg',
    name: 'Dr C Porkodi',
    designation: 'Professor and Head, Department of Mathematics',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: 'CONVENOR'
  },
  {
    photo: '/src/images/rsl.png',
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
    photo: '/src/images/john.webp',
    name: 'Dr. John Rozario Jegaraj',
    designation: 'Technology Director & Senior Scientist (G) ',
    organisation: 'DRDO , India',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: '/src/images/pandian.jpg',
    name: 'Dr. Pandian P.S.',
    designation: 'Scientist, Defence Bioengineering and Electromedical Laboratory',
    organisation: 'DRDO , India',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: '/src/images/sankar.jpg',
    name: 'Dr. CH. N. A. B. Sankar',
    designation: 'Scientist, Research Centre Imarat',
    organisation: 'DRDO , India',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: '/src/images/arumuganathan.png',
    name: 'Dr. Arumuganathan R',
    designation: 'Professor , Department of Mathematics',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: ''
  },
];

const technicalCommittee = [
  {
    photo: '/src/images/mahesh.webp',
    name: 'Dr. Maheshanand',
    designation: 'Professor and Head of the Department of Mathematics',
    organisation: 'IIIT Roorkee',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: '/src/images/abhay.jpg',
    name: 'Dr. Abhay Kumar Singh',
    designation: 'Associate Professor, Department of Mathematics and Computing',
    organisation: 'IIT (ISM), Dhanbad',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: '/src/images/tech3.jpg',
    name: 'Dr. Tech Three',
    designation: 'Professor',
    organisation: 'Tech University 3',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: '/src/images/tech4.jpg',
    name: 'Dr. Tech Four',
    designation: 'Professor',
    organisation: 'Tech University 4',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: '/src/images/tech5.jpg',
    name: 'Dr. Tech Five',
    designation: 'Professor',
    organisation: 'Tech University 5',
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
    </>
  );
};

export default Committee;
