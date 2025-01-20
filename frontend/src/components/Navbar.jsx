import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Add logo image and text here */}
      <div className="navbar-logo">
        <img src="/vts logo.jpg" alt="VTS Show" className="logo-img" />
        <span className="logo-text">VTS Show</span>
      </div>
      <div className="navbar-toggle" onClick={handleToggle}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'navbar-links-mobile' : ''}`}>
        <li><a href="#movies" className="nav-link">Movies</a></li>
        <li><a href="#events" className="nav-link">Events</a></li>
        <li><a href="#plays" className="nav-link">Plays</a></li>
        <li><a href="#sports" className="nav-link">Sports</a></li>
        <li><a href="#activities" className="nav-link">Activities</a></li>
        <li><a href="#buzz" className="nav-link">Buzz</a></li>
      </ul>
      <div className="navbar-user">
        <button className="user-login">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;

