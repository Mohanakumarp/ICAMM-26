import React, { useState } from 'react';
import './details.css';

const Details: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('guidelines');

  const sections = [
    { id: 'guidelines', title: 'Guidelines', icon: '📋' },
    { id: 'publication', title: 'Publication', icon: '📚' },
    { id: 'plagiarism', title: 'Plagiarism', icon: '🔍' },
    { id: 'accommodation', title: 'Accommodation', icon: '🏨' },
    { id: 'visa', title: 'Visa', icon: '🛂' }
  ];

  const journals = [
    'Journal of Fractional Calculus and Non-linear System',
    'Journal of Mathematical Analysis and Modeling',
    'Journal of Mathematical Control Sciences and Applications',
    'SPRINGER NATURE publishing (under discussion)'
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'guidelines':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">📋</span>
                Guidelines
              </h2>
              <p className="section-subtitle">Important guidelines for paper submission and conference participation</p>
            </div>
            <div className="guidelines-list">
              <div className="guideline-item">
                <div className="guideline-number">1</div>
                <div className="guideline-content">
                  <p>All submitted papers must be <strong>original</strong> and should not have been published previously, nor should they be submitted for publication elsewhere before or after the conference.</p>
                </div>
              </div>
              <div className="guideline-item">
                <div className="guideline-number">2</div>
                <div className="guideline-content">
                  <p>Submit your paper in the prescribed format (<strong>IEEE - Format</strong>). Utilize the sample paper provided on the conference website and carefully review the "Rules and Regulations" of the conference.</p>
                </div>
              </div>
              <div className="guideline-item">
                <div className="guideline-number">3</div>
                <div className="guideline-content">
                  <p><strong>ICAMM 2026</strong> will not publish any paper that has not been registered.</p>
                </div>
              </div>
              <div className="guideline-item">
                <div className="guideline-number">4</div>
                <div className="guideline-content">
                  <p>If a complaint regarding the authorship of a paper is received and found to be valid, the paper will be <strong>immediately withdrawn</strong> from publication.</p>
                </div>
              </div>
              <div className="guideline-item">
                <div className="guideline-number">5</div>
                <div className="guideline-content">
                  <p>All conference notifications will be communicated through your <strong>registered email ID</strong> and mobile number.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'publication':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">📚</span>
                Publication in International/National Journals
              </h2>
              <p className="section-subtitle">Information about journal publication opportunities</p>
            </div>
            <div className="publication-content">
              <div className="publication-info">
                <div className="info-card">
                  <h3>Selection Process</h3>
                  <p>ICAMM 2026 reserves the right to select papers from the conference for publication in international journals.</p>
                </div>
                <div className="info-card">
                  <h3>Publication Request</h3>
                  <p>Upon a written request from the author, ICAMM 2026 can submit a paper to any international journal indexed in <strong>Scopus or SCI</strong>. Authors will be responsible for covering the full publication costs.</p>
                </div>
                <div className="info-card">
                  <h3>Review Timeline</h3>
                  <p>The ICAMM 2026 review process for associated international journals typically takes a minimum of <strong>30 to 60 days</strong> to complete after the conference.</p>
                </div>
              </div>
              
              <div className="journals-section">
                <h3>Associated Journals</h3>
                <div className="journals-grid">
                  {journals.map((journal, index) => (
                    <div key={index} className="journal-card">
                      <div className="journal-icon">📄</div>
                      <p>{journal}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="important-notes">
                <h3>Important Notes</h3>
                <ul>
                  <li>The international journals associated with ICAMM 2026 are <strong>ISSN-approved</strong></li>
                  <li>Authors who wish to receive a hard copy of the journal must cover the associated charges</li>
                  <li>The editorial board holds the right to reject any paper for publication after the second round of review</li>
                  <li>If a paper is rejected, the conference registration fee will <strong>not be refunded</strong></li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'plagiarism':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">🔍</span>
                Plagiarism Policy
              </h2>
              <p className="section-subtitle">Strict guidelines to ensure originality and academic integrity</p>
            </div>
            <div className="plagiarism-content">
              <div className="plagiarism-highlight">
                <div className="highlight-card">
                  <div className="highlight-icon">⚠️</div>
                  <div className="highlight-text">
                    <h3>Maximum Allowed Plagiarism</h3>
                    <p className="percentage">Below 25%</p>
                  </div>
                </div>
              </div>
              
              <div className="policy-points">
                <div className="policy-item">
                  <div className="policy-icon">✅</div>
                  <div className="policy-content">
                    <h4>Author Responsibility</h4>
                    <p>Authors are responsible for checking the plagiarism (below 25%) of their papers before submission. Authors who republish their previously published work (self-plagiarism) will be subject to the same procedures.</p>
                  </div>
                </div>
                
                <div className="policy-item">
                  <div className="policy-icon">🔬</div>
                  <div className="policy-content">
                    <h4>Detection Process</h4>
                    <p>All research papers submitted for publication undergo plagiarism detection using specialized software to verify their originality and determine the similarity percentage.</p>
                  </div>
                </div>
                
                <div className="policy-item">
                  <div className="policy-icon">📝</div>
                  <div className="policy-content">
                    <h4>Non-Compliance</h4>
                    <p>Papers that do not meet the required criteria will be returned to the author for revision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'accommodation':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">🏨</span>
                Accommodation
              </h2>
              <p className="section-subtitle">Stay arrangements for conference delegates</p>
            </div>
            <div className="accommodation-content">
              <div className="accommodation-card">
                <div className="accommodation-icon">🏢</div>
                <div className="accommodation-info">
                  <h3>College Accommodation</h3>
                  <p>Limited accommodation for registered delegates is available at the guest house/student hostels of the college, on a <strong>chargeable basis</strong> subject to availability.</p>
                </div>
              </div>
              
              <div className="booking-info">
                <div className="booking-requirement">
                  <div className="requirement-icon">📞</div>
                  <h4>Advance Booking Required</h4>
                  <p>Requests for accommodation must be made <strong>in advance</strong> to ensure availability.</p>
                </div>
              </div>
              
              <div className="accommodation-features">
                <h4>What's Included</h4>
                <div className="features-grid">
                  <div className="feature-item">
                    <span className="feature-icon">🛏️</span>
                    <span>Comfortable Stay</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🔒</span>
                    <span>Secure Environment</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📍</span>
                    <span>On-Campus Location</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💰</span>
                    <span>Affordable Rates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'visa':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">🛂</span>
                Visa Information
              </h2>
              <p className="section-subtitle">Essential visa requirements for international delegates</p>
            </div>
            <div className="visa-content">
              <div className="visa-requirement">
                <div className="requirement-card">
                  <div className="requirement-icon">🌍</div>
                  <div className="requirement-text">
                    <h3>Visa Requirement</h3>
                    <p>All <strong>overseas citizens</strong> travelling to India require a visa.</p>
                  </div>
                </div>
              </div>
              
              <div className="visa-resources">
                <h3>Helpful Resources</h3>
                <div className="resource-card">
                  <div className="resource-icon">🔗</div>
                  <div className="resource-content">
                    <h4>Official Visa Portal</h4>
                    <p>A general portal with information about consulates and visa services for India:</p>
                    <a href="http://www.visatoindia.com" target="_blank" rel="noopener noreferrer" className="visa-link">
                      www.visatoindia.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="visa-tips">
                <h3>Application Tips</h3>
                <div className="tips-grid">
                  <div className="tip-item">
                    <span className="tip-icon">⏰</span>
                    <span>Apply well in advance</span>
                  </div>
                  <div className="tip-item">
                    <span className="tip-icon">📄</span>
                    <span>Keep all documents ready</span>
                  </div>
                  <div className="tip-item">
                    <span className="tip-icon">✈️</span>
                    <span>Check passport validity</span>
                  </div>
                  <div className="tip-item">
                    <span className="tip-icon">📧</span>
                    <span>Contact embassy if needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="details-container">
      {/* Background decorative elements */}
      <div className="details-bg-decoration">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="details-content">
        <div className="details-header">
          <h1 className="details-title">
            <span className="title-icon">📋</span>
            Conference Details
          </h1>
          <p className="details-subtitle">
            Everything you need to know about ICAMM-26
          </p>
        </div>

        <div className="details-layout">
          {/* Navigation Sidebar */}
          <div className="details-nav">
            <div className="nav-header">
              <h3>Quick Navigation</h3>
            </div>
            <div className="nav-items">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <span className="nav-icon">{section.icon}</span>
                  <span className="nav-text">{section.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="details-main">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
