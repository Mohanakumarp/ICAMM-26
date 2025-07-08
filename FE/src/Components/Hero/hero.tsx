import React from 'react';
import './Hero.css';
import video from '../../Assets/video.mp4';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <video className="video-background" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
        <div className="circuit-overlay"></div>
        <div className="dots-overlay"></div>
      </div>

      <div className="hero-title-container">
        <h1 className="hero-title text-gradient">Seventh International Conference On</h1>
        <h2 className="hero-subtitle highlight">Applied Mathematical Models</h2>
        <h2 className="hero-subtitle">ICAMM 2026</h2>
        <p className="hero-date">January 8–10, 2026</p>
        <p className="hero-org">Organized by the Department of Mathematics</p>
        <p className="hero-inst">PSG College of Technology</p>
        <p className="hero-loc">Coimbatore – 641004, Tamil Nadu, India</p>
      </div>

      <Countdown />
    </section>
  );
};

export default Hero;
