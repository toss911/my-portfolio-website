import "./navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <nav>
      <img
        src="images/header/header-background.svg"
        id="header-bg"
        alt="background"
      />
      <div className="hollow-circle-1"></div>
      <div className="hollow-circle-2"></div>
      <div className="navbar">
        <p className="website-logo">Tossaporn</p>
        <div className="menu">
          <a href="#about-me-section">About</a>
          <a href="#my-skills-section">Skills</a>
          <a href="#my-portfolio-section">Portfolio</a>
          <a href="#contact-me-section">Contact</a>
        </div>
        <div className="menu-hamburger">
          <img
            src="images/header/menu-icon.svg"
            width="60px"
            onClick={() => toggle()}
          />
          {isToggle ? (
            <div className="menu-list">
              <a href="#about-me-section">About</a>
              <a href="#my-skills-section">Skills</a>
              <a href="#my-portfolio-section">Portfolio</a>
              <a href="#contact-me-section">Contact</a>
            </div>
          ) : null}
        </div>
      </div>
      <div className="hero">
        <div className="hero-title">
          <p className="name-introduction">Hello, I'm Tossaporn</p>
          <p className="current-role">Entry-level Software Developer</p>
          <br />
          <p className="self-summary">
            Transitioning from a career in the heavy industry and seeking a
            full-time role in the field of software development
          </p>
          <div className="button">
            <a href="#send-message-form">Send message</a>
            <a href="https://www.google.co.th/">Download Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="images/header/hero-img.png"
            alt="A man sitting with laptop"
            height="590px"
          />
        </div>
      </div>
    </nav>
  );
};
