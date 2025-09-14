import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="brand-title" onClick={() => navigate('/')} style={{ cursor: "pointer" }}>
          <span className="conference-name">ICAMM'26</span>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="desktop-menu">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/committee" className="nav-link">Committee</a>
          <a href="/speakers" className="nav-link">Speakers</a>
          <a href="/dates" className="nav-link">Dates</a>
          <a href="/details" className="nav-link">Details</a>
          <a href="/registration" className="nav-link">Registration</a>
          <button 
            className="register-btn"
            onClick={() => navigate('/registration')}
          >
            Register Now
          </button>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg className="menu-button" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            <svg className="menu-button" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`sidebar-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-menu-links">
          <a href="/" className='nav-link' onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="/committee" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Committee</a>
          <a href="/speakers" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Speakers</a>
          <a href="/dates" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Dates</a>
          <a href="/details" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Details</a>
          <a href="/registration" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Registration</a>
          <button 
            className="register-btn mobile-register-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              navigate('/registration');
            }}
          >
            Register Now
          </button>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;