import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../assets/logo.png';


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

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-container">
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: "pointer" }}>
            <img src={Logo} alt="Logo" className="logo-image" />
            <div className="sep-line"></div>
            <div className="logo-text">
              <span className="conference-name">ICAMM'26</span>
              <span className="institution-name">PSG College of Technology</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="desktop-menu">
          <a href="/" className="nav-link">Home</a>
          <a href="/committee" className="nav-link">Committee</a>
          <a href="/speakers" className="nav-link">Speakers</a>
          <a href="/domain" className="nav-link">Domains</a>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`sidebar-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-menu-links">
          <a href="/" className='nav-link'>Home</a>
          <a href="/committee" className="nav-link">Committee</a>
          <a href="/speakers" className="nav-link">Speakers</a>
          <a href="/domain" className="nav-link">Domains</a>
          <a href="/registration" className="nav-link">Registration</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;