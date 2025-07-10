import ProfileCard from './profilecard';
import './committee.css';

const Committee = () => {
  return (
    <div>
      <div className="committee-container">
        <div className="glass-container">
          <h3 className="committee-title">ORGANIZING COMMITTEE</h3>
        
        <div className="committee-grid">          <div className="committee-section">
            <h4 className="position-title">CHIEF PATRON</h4>
            <ProfileCard 
              photo="/images/trustee.jpg"
              name="Shri L Gopalakrishnan"
              designation="Managing Trustee"
              organisation="PSG & Sons' Charities Trust"
            />
          </div>
            <div className="committee-section">
            <h4 className="position-title">PATRON</h4>
            <ProfileCard 
              photo="/images/principal.jpg"
              name="Dr K Prakasan"
              designation="Principal"
              organisation="PSG College of Technology"
            />
          </div>            <div className="committee-section">
            <h4 className="position-title">CONVENER</h4>
            <ProfileCard 
              photo="/images/hod_maths.jpeg"
              name="Dr C Porkodi"
              designation="Professor and Head<br/>Department of Mathematics"
              organisation="PSG College of Technology"
            />
          </div>
            <div className="committee-section">
            <h4 className="position-title">ORGANIZING SECRETARY</h4>
            <ProfileCard 
              photo="/images/rsl.png"
              name="Dr R Subalakshmi"
              designation="Assistant Professor (Sl. Gr.)<br /> Department of Mathematics"
              organisation="PSG College of Technology"
            />
            </div>
            <div className="committee-section">
            <h4 className="position-title">ADVISORY COMMITEE</h4>
            <ProfileCard 
              photo=""
              name="XYZ"
              designation="XYZ"
              organisation="XYZ"
            />
            </div>
            <div className="committee-section">
            <h4 className="position-title">ADVISORY COMMITEE</h4>            <ProfileCard 
              photo=""
              name="XYZ"
              designation="XYZ"
              organisation="XYZ"
            />
            </div>

        </div>
      </div>
      </div>      {/* Separate Container for Conference Committees Table */}
      <div className="conference-committee-container">
        <div className="conference-glass-container">
          <h3 className="table-title">CONFERENCE COMMITTEES</h3>
          <div className="table-wrapper">
            <table className="committee-table">
          <thead>
            <tr>
              <th>Committee</th>
              <th>Panel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={5} className="committee-name">Programme Committee</td>
              <td>Dr. B. Sridevi (Advisor)</td>
            </tr>
            <tr>
              <td>Dr. R. Rajasudha (Convener)</td>
            </tr>
            <tr>
              <td>Dr. S. Geetha</td>
            </tr>
            <tr>
              <td>Ms. S T Parkhasarathi</td>
            </tr>
            <tr>
              <td>Ms. V. Deepa</td>
            </tr>
            
            <tr>
              <td rowSpan={5} className="committee-name">Proceedings Committee</td>
              <td>Dr. M. Haridass (Advisor)</td>
            </tr>
            <tr>
              <td>Dr. A. Muthulakshmi (Convener)</td>
            </tr>
            <tr>
              <td>Dr. C. K. Deva Meri</td>
            </tr>
            <tr>
              <td>Ms. V. Deepa</td>
            </tr>
            <tr>
              <td>Dr. D. Kiruthika</td>
            </tr>

            <tr>
              <td rowSpan={6} className="committee-name">Funding and Finance Committee</td>
              <td>Dr. T. Vasudha (Advisor)</td>
            </tr>
            <tr>
              <td>Dr. R. Bindhu (Convener)</td>
            </tr>
            <tr>
              <td>Dr. B. Radhakrishnan</td>
            </tr>
            <tr>
              <td>Dr. Raji Krishnan</td>
            </tr>
            <tr>
              <td>Mr. K. Saravanan</td>
            </tr>
            <tr>
              <td>Dr. K. Sangavi (Advisor)</td>
            </tr>

            <tr>
              <td rowSpan={6} className="committee-name">Hall Arrangements Committee</td>
              <td>Dr. M. Bagavathami (Convener)</td>
            </tr>
            <tr>
              <td>Dr. C. K. Deva Meri</td>
            </tr>
            <tr>
              <td>Dr. Raji Krishnan</td>
            </tr>
            <tr>
              <td>Dr. D. Kiruthika</td>
            </tr>
            <tr>
              <td>Dr. R. Syama</td>
            </tr>
            <tr>
              <td>Dr. R. Subalakshmi (Convener)</td>
            </tr>

            <tr>
              <td rowSpan={5} className="committee-name">Registration Committee</td>
              <td>Dr. M. Sumathy</td>
            </tr>
            <tr>
              <td>Dr. P. Sathyajala</td>
            </tr>
            <tr>
              <td>Ms. S. Tamilselu</td>
            </tr>
            <tr>
              <td>Ms. M. Radhiga (Convener)</td>
            </tr>
            <tr>
              <td>Dr. P. Sathyajala</td>
            </tr>

            <tr>
              <td rowSpan={5} className="committee-name">Publicity and Hospitality Committee</td>
              <td>Dr. J. Nangeachamy</td>
            </tr>
            <tr>
              <td>Dr. B. Radhakrishnan</td>
            </tr>
            <tr>
              <td>Mr. K. Saravanan</td>
            </tr>
            <tr>
              <td>Dr. R. Pallavi</td>
            </tr>            <tr>
              <td>Dr. R. Syama</td>            </tr>
          </tbody>
        </table>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Committee;
