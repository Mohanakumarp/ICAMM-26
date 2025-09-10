import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="footer-conference">ICAMM'26</span>
            <span className="footer-institution">PSG College of Technology</span>
          </div>
          <div className="footer-links">
            <a href="/" className="footer-link">Home</a>
            <a href="/committee" className="footer-link">Committee</a>
            <a href="/speakers" className="footer-link">Speakers</a>
            <a href="/domain" className="footer-link">Domains</a>
            <a href="/registration" className="footer-link">Registration</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ICAMM'26. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
