import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          
          <h1 className="footer-logo-text"><img src="/vts logo.jpg" alt="VTS Show" className="footer-logo-img" />VTS Show</h1>
        </div>

        <div className="footer-content">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: support@vtsshow.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#facebook" className="social-icon">F</a>
              <a href="#twitter" className="social-icon">T</a>
              <a href="#instagram" className="social-icon">I</a>
              <a href="#linkedin" className="social-icon">L</a>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest updates on movies, events, and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer-app">
            <h3>Download Our App</h3>
            <p>Get easy access to tickets and updates on the go.</p>
            <div className="app-icons">
              <a href="#playstore" className="app-icon">Google Play</a>
              <a href="#appstore" className="app-icon">App Store</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 VTS Show. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
