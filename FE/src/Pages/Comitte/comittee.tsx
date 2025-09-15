import CommitteeCard from './committeeCard';
import './committee.css';

const Committee = () => {
  return (
    <div className="page-wrapper">
      <div className="committee-container">
        <div className="glass-container">
          <h3 className="committee-title">ORGANIZING COMMITTEE</h3>
          <div className="committee-grid">
            <div className="committee-section">
              <h4 className="position-title">CHIEF PATRON</h4>
              <CommitteeCard 
                name="Shri L Gopalakrishnan"
                designation="Managing Trustee"
                organisation="PSG & Sons' Charities Trust"
              />
            </div>
            <div className="committee-section">
              <h4 className="position-title">PATRON</h4>
              <CommitteeCard 
                name="Dr K Prakasan"
                designation="Principal"
                organisation="PSG College of Technology"
              />
            </div>
            <div className="committee-section">
              <h4 className="position-title">CONVENER</h4>
              <CommitteeCard 
                name="Dr C Porkodi"
                designation="Professor and Head<br/>Department of Mathematics"
                organisation="PSG College of Technology"
              />
            </div>
            <div className="committee-section">
              <h4 className="position-title">ORGANIZING SECRETARY</h4>
              <CommitteeCard 
                name="Dr R Subalakshmi"
                designation="Assistant Professor (Sl. Gr.)<br /> Department of Mathematics"
                organisation="PSG College of Technology"
              />
            </div>
            <div className="committee-section">
              <h4 className="position-title">ADVISORY COMMITEE</h4>
              <CommitteeCard 
                name="Dr Pandian P S"
                designation="Scientist, Defence Bioengineering and Electromedical Laboratory"
                organisation="DRDO , India"
              />
            </div>
            <div className="committee-section">
              <h4 className="position-title">ADVISORY COMMITEE</h4>
              <CommitteeCard 
                name="Dr CH N A B Sankar"
                designation="Scientist, Research Centre Imarat"
                organisation="DRDO , India"
              />
            </div>
            <div className="committee-section">
              <h4 className="position-title">ADVISORY COMMITEE</h4>
              <CommitteeCard 
                name="Dr John Rozario Jegaraj"
                designation="Technology Director & Senior Scientist (G)"
                organisation="DRDO , India"
              />
            </div>
            <div className="committee-section">
              <h4 className="position-title">TECHNICAL COMMITEE</h4>
              <CommitteeCard 
                name="Dr Maheshanand"
                designation="Professor and Head<br/>Department of Mathematics"
                organisation="IIT Roorkee, India"
              />
            </div>
            <div className="committee-section">
              <h4 className="position-title">TECHNICAL COMMITEE</h4>
              <CommitteeCard 
                name="Dr Abhay Kumar Singh"
                designation="Associate Professor<br/>Department of Mathematics and Computing"
                organisation="IIT (ISM) Dhanbad , India"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
