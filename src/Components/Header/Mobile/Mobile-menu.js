import React from "react";
import "./Mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
      <div className="web-option">
        <a href="#home">Home</a>
      </div>
        <div className="mobile-option">
          <a href="#about">
            <i class="fi-rr-edit-alt option-icon"></i>About Us
          </a>
        </div>
        <div className="mobile-option">
          <a href="#expertise">
            <i class="fi-rr-laptop option-icon"></i>Areas of Expertise
          </a>
        </div>
        <div className="mobile-option">
          <a href="#clients">Our Clinets</a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fi-rr-user option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
