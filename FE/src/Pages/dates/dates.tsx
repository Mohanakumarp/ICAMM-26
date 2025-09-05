import React from 'react';
import './dates.css';

const Dates: React.FC = () => {
  const importantDates = [
    {
      id: 1,
      title: "Paper Submission",
      date: "September 25, 2025",
      extended: "",
      icon: "📝",
      description: "Submit your original research papers",
      color: "blue",
      status: "open"
    },
    {
      id: 2,
      title: "Notification of Acceptance",
      date: "Januaury 30, 2026",
      icon: "📧",
      description: "Authors will be notified about paper acceptance",
      color: "green",
      status: "pending"
    },
    {
      id: 3,
      title: "Camera Ready Paper Submission",
      date: "February 28, 2026",
      icon: "📄",
      description: "Submit final version of accepted papers",
      color: "orange",
      status: "pending"
    },
    {
      id: 4,
      title: "Author Registration",
      date: "June 15 , 2026",
      icon: "✅",
      description: "Complete registration for conference attendance",
      color: "purple",
      status: "pending"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="dates-container">
        {/* Background decorative elements */}
        <div className="dates-bg-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>

      <div className="dates-content">
        <div className="dates-header">
          <h2 className="dates-title">
            <span className="title-icon">📅</span>
            IMPORTANT DATES
          </h2>
          <p className="dates-subtitle">
            Mark your calendar with these key deadlines for ICAMM-26
          </p>
        </div>

        <div className="dates-timeline">
          {importantDates.map((dateItem, index) => (
            <div 
              key={dateItem.id} 
              className={`date-card ${dateItem.color} ${dateItem.status}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="date-card-inner">
                <div className="date-icon-container">
                  <span className="date-icon">{dateItem.icon}</span>
                  <div className="icon-pulse"></div>
                </div>
                
                <div className="date-content">
                  <h3 className="date-title">{dateItem.title}</h3>
                  <div className="date-info">
                    <div className="main-date">
                      <span className="date-label">Deadline:</span>
                      <span className="date-value">{dateItem.date}</span>
                    </div>
                    {dateItem.extended && (
                      <div className="extended-date">
                        <span className="extended-label">Extended:</span>
                        <span className="extended-value">{dateItem.extended}</span>
                      </div>
                    )}
                  </div>
                  <p className="date-description">{dateItem.description}</p>
                </div>

                <div className="date-status-indicator">
                  <div className={`status-dot ${dateItem.status}`}></div>
                  <span className="status-text">
                    {dateItem.status === 'open' ? 'Open' : 'Upcoming'}
                  </span>
                </div>
              </div>

              {/* Card decorative elements */}
              <div className="card-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-triangle"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Program Schedule Section */}
        <div className="program-schedule">
          <div className="schedule-header">
            <h2 className="schedule-title">
              <span className="schedule-icon">📋</span>
              PROGRAM SCHEDULE
            </h2>
            <p className="schedule-subtitle">
              Explore the conference agenda day by day
            </p>
          </div>

          <div className="schedule-days">
            <div className="day-circle day-1">
              <a href="#" className="day-link">
                <div className="day-content">
                  <span className="day-number">1</span>
                  <span className="day-label">Day 1</span>
                </div>
                <div className="day-decoration"></div>
              </a>
            </div>

            <div className="day-circle day-2">
              <a href="#" className="day-link">
                <div className="day-content">
                  <span className="day-number">2</span>
                  <span className="day-label">Day 2</span>
                </div>
                <div className="day-decoration"></div>
              </a>
            </div>

            <div className="day-circle day-3">
              <a href="#" className="day-link">
                <div className="day-content">
                  <span className="day-number">3</span>
                  <span className="day-label">Day 3</span>
                </div>
                <div className="day-decoration"></div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Dates;
