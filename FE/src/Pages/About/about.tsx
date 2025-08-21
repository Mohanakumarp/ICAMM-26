import React from 'react';
import './about.css';
import CollegeImg from '../../Assets/College.png';
import DepartmentImg from '../../Assets/Department.png';
import ConferenceImg from '../../Assets/logo.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h1 className="section-title">About</h1>
        
        {/* College Section */}
        <div className="about-card college">
          <div className="about-card-header">
            <div className="about-text-content">
              <h2 className="about-heading">About the College</h2>
              <h3 className="about-subheading">PSG College of Technology</h3>
              <div className="about-content">
                <p>
                  PSG College of Technology, established in the year 1951 by PSG & Sons' Charities, 
                  is an ISO 9001 - 2015 certified autonomous college affiliated to Anna University, Chennai. 
                  The college offers 21 undergraduate programmes and 24 postgraduate programmes which includes 
                  Engineering and Technology, Computer Applications, Management Sciences, Basic and Applied Sciences.
                </p>
                <p>
                  Several advanced centres are set up with financial support from MoE, DST and other agencies. 
                  PSG College of Technology was ranked second under Colleges/Institutes (Govt. & Govt. Aided) 
                  (Technical) by ATAL Ranking of Institutions on Innovation Achievements (ARIIA), Ministry of 
                  Education, Government of India in the year 2021 and the best industry linked institution by 
                  AICTE-CII in the year 2012.
                </p>
                <p>
                  During the occasion of India assuming the G20 Presidency on December 1, 2022, PSG College 
                  of Technology was identified as pioneer among the 75 educational institutions across India, 
                  with special responsibilities towards organizing special lectures, student exchange programmes, 
                  academic and cultural activities to spread awareness among the youth and the academic community 
                  on the G20 agenda.
                </p>
              </div>
            </div>
            <div className="about-image-container">
              <img src={CollegeImg} alt="PSG College of Technology" className="about-image" />
            </div>
          </div>
        </div>

        {/* Department Section - FIXED */}
        <div className="about-card department">
          <div className="about-card-header">
            <div className="about-text-content">
              <h2 className="about-heading">About the Department</h2>
              <h3 className="about-subheading">Department of Mathematics</h3>
              <div className="about-content">
                <p>
                  Since 1951, the Department of Mathematics at PSG College of Technology continues to impart 
                  mathematical skill and analytical thinking to all Engineering and Science graduates of this 
                  institution. Over the past 7 decades with the highest standards in both research and teaching, 
                  it has seen a phenomenal growth and success.
                </p>
                <p>
                  The department is equipped with 27 dedicated faculty as facilitators with a strong research base. 
                  So far, the department has produced 43 doctorates in the field of Applied and Pure Mathematics. 
                  Several outreach events, including conferences, workshops, seminars, and symposiums on a wide range 
                  of topics, were organized by the department.
                </p>
                <p>
                  The department also trains engineering students with strong mathematical background to enhance 
                  and apply their skills to find solutions to their field specific problems. An appreciable number 
                  of research articles with Scopus and SCI indexes are published annually that are associated with 
                  the department.
                </p>
              </div>
            </div>
            <div className="about-image-container">
              <img src={DepartmentImg} alt="Department of Mathematics" className="about-image" />
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="about-card vision-mission">
          <div className="about-card-header">
            <div className="about-text-content">
              <h2 className="about-heading">Vision and Mission</h2>
              <h3 className="about-subheading">Department of Mathematics</h3>
              <div className="about-content">
                <div className="vision-mission-container">
                  <ul className="vision-mission-list">
                    <p>
                      Provide students with the best possible educational and research experience
                      essential for developing global citizens.
                      Apply Mathematical sciences to the pressing problems of the real world.
                      Explore the two-way relationship between technology and society.
                      </p>
                      <p>
                      To create competent professionals by inculcating highly skilled mathematical
                      knowledge.
                      To encourage acquisition of life-long learning skills by educating the leaders of
                      tomorrow.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Section */}
        <div className="about-card conference">
          <div className="about-card-header">
            <div className="about-text-content">
              <h2 className="about-heading">About the Conference</h2>
              <h3 className="about-subheading">ICAMM'26</h3>
              <div className="about-content">
                <p>
                  The Seventh International Conference on Applied Mathematical Models (ICAMM 2026) will be held 
                  in the Department of Mathematics at PSG College of Technology in Coimbatore from January 8–10, 2026. 
                  The conference aims to stimulate research and make a substantial contribution to the advancement of 
                  computational and mathematical models.
                </p>
                <p>
                  This is achieved by offering a forum for the exchange of novel concepts and discussions of recent 
                  advancements in the subject among scholars, researchers, students, and business professionals. 
                  Further, it would provide a platform for outstanding research articles on mathematics' theoretical 
                  foundations and technological and engineering applications.
                </p>
              </div>
            </div>
            <div className="about-image-container">
              <img src={ConferenceImg} alt="ICAMM'26 Conference" className="about-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
