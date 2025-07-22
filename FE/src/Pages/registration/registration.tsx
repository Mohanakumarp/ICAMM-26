import React from 'react';
import './registration.css';

const Registration: React.FC = () => {
  const registrationFees = [
    { 
      category: 'Academicians/Part time research scholars', 
      early: '₹2,500', 
      late: '₹3,000' 
    },
    { 
      category: 'Industry/R&D Institution participants', 
      early: '₹3,500', 
      late: '₹4,000' 
    },
    { 
      category: 'Full time research scholars', 
      early: '₹2,000', 
      late: '₹2,500' 
    },
    { 
      category: 'Accompanying guests/Spouse', 
      early: '₹2,000', 
      late: '₹2,000' 
    }
  ];

  return (
    <div className="registration-container">
      <div className="registration-content">
        <div className="registration-header">
          <h1 className="registration-title">
            <span className="title-icon">📝</span>
            Registration
          </h1>
          <p className="registration-subtitle">
            Conference registration requirements and fee structure for ICAMM-26
          </p>
        </div>

        <div className="registration-main">
          <div className="mandatory-notice">
            <div className="notice-card">
              <span className="notice-icon">⚠️</span>
              <div className="notice-text">
                <h3>Mandatory Registration</h3>
                <p>At least one author of each accepted paper must register for the conference</p>
              </div>
            </div>
          </div>

          <div className="registration-fees-section">
            <h3>Registration Fees</h3>
            <div className="fees-table">
              <div className="table-header">
                <div className="table-cell">Category</div>
                <div className="table-cell">Early Bird</div>
                <div className="table-cell">Late Registration</div>
              </div>
              {registrationFees.map((fee, index) => (
                <div key={index} className="table-row">
                  <div className="table-cell category">{fee.category}</div>
                  <div className="table-cell early">{fee.early}</div>
                  <div className="table-cell late">{fee.late}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="registration-includes">
            <h3>Registration Fee Includes</h3>
            <div className="includes-grid">
              <div className="include-item">
                <span>Conference Kit</span>
              </div>
              <div className="include-item">
                <span>Lunch & Refreshments</span>
              </div>
              <div className="include-item">
                <span>Event Certificates</span>
              </div>
              <div className="include-item">
                <span>Conference Events</span>
              </div>
            </div>
          </div>

          <div className="special-notes">
            <h3>Important Notes</h3>
            <ul>
              <li>For <strong>full time research scholars</strong>, a bonafide certificate duly signed by the research supervisor/head of the institution/department shall be attached along with the registration form</li>
              <li>All accepted papers will be considered for presentation and publication only <strong>after the payment of registration fee</strong></li>
              <li>Registration fee is <strong>non-refundable</strong> under any circumstances</li>
              <li>Early bird rates are valid until the specified deadline</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
