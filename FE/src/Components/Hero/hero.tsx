import { useEffect, useState } from 'react';
import './hero.css';
import video from '../../Assets/video.mp4';
import Countdown from './Countdown';
import Logo75 from '../../Assets/75yearsLogo_PSGCollegeofTech.png';
import Logo100 from '../../Assets/100yearsLogo_PsgSonsCharities.png';
import SampleSponsorLogo from '../../Assets/PSGlogo.png';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const mathSymbols = ['∫', '∑', '∏', 'π', '∞', '√', 'Δ', '∇', 'θ', 'λ', 'μ', 'σ', '±', '×', '÷'];
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const createMathSymbol = () => {
      const mathField = document.querySelector('.math-symbols');
      if (!mathField) return;

      const symbol = document.createElement('span');
      symbol.className = 'math-symbol';
      symbol.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];

      // Random position and size
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const size = Math.random() * 1.5 + 1;
      const duration = Math.random() * 12 + 6;
      const opacity = Math.random() * 0.5 + 0.3;

      // Cursor influence
      const offsetX = ((mouse.x / window.innerWidth) - 0.5) * 100;
      const offsetY = ((mouse.y / window.innerHeight) - 0.5) * 100;

      symbol.style.cssText = `
        left: ${posX}%;
        top: ${posY}%;
        font-size: ${size}rem;
        animation-duration: ${duration}s;
        opacity: ${opacity};
        transform: translate(${offsetX}px, ${offsetY}px);
      `;

      mathField.appendChild(symbol);

      // Remove after animation
      setTimeout(() => {
        mathField.removeChild(symbol);
      }, duration * 1000);
    };

    const intervalId = setInterval(createMathSymbol, 600);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <video className="video-background" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="math-symbols"></div>

      {isMobile ? (
        <div className="hero-inner">
          <div className="hero-center">
            <h1 className="hero-title">Seventh International Conference On</h1>
            <h2 className="hero-subtitle highlight">Applied Mathematical Models</h2>
            <h2 className="hero-subtitle">ICAMM 2026</h2>
            <p className="hero-date">June 10–12, 2026</p>
            <p className="hero-org">Organized by</p>
            <p className="hero-inst">Department of Mathematics<br />PSG College of Technology</p>
            <p className="hero-loc">Coimbatore – 641004, Tamil Nadu, India</p>
            
            <div className="hero-logos-mobile">
              <img src={Logo75} alt="75 Years of PSG College of Technology" className="side-logo" />
              <img src={Logo100} alt="100 Years of PSG Sons Charities" className="side-logo" />
            </div>
          </div>
        </div>
      ) : (
        <div className="hero-inner">
          <div className="hero-left">
            <img src={Logo75} alt="75 Years of PSG College of Technology" className="side-logo" />
          </div>
          
          <div className="hero-center">
            <h1 className="hero-title">Seventh International Conference On</h1>
            <h2 className="hero-subtitle highlight">Applied Mathematical Models</h2>
            <h2 className="hero-subtitle">ICAMM 2026</h2>
            <p className="hero-date">June 10–12, 2026</p>
            <p className="hero-org">Organized by</p>
            <p className="hero-inst">Department of Mathematics<br />PSG College of Technology</p>
            <p className="hero-loc">Coimbatore – 641004, Tamil Nadu, India</p>
          </div>
          
          <div className="hero-right">
            <img src={Logo100} alt="100 Years of PSG Sons Charities" className="side-logo" />
          </div>
        </div>
      )}

      {!isMobile && <Countdown />}

      <div className="sponsors-section">
        <h3 className="sponsors-title">Sponsors</h3>
        <div className="sponsors-logos">
          <img src={SampleSponsorLogo} alt="Sponsor" className="sponsor-logo" />
          <img src={SampleSponsorLogo} alt="Sponsor" className="sponsor-logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
