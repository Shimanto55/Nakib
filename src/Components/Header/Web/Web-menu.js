import React from "react";
import "./Web-menu.css";
function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#home">Home</a>
      </div>
      <div className="web-option">
        <a href="#about">
          <i class="fi-rr-edit-alt option-icon"></i>About Us
        </a>
      </div>
      <div className="web-option">
        <a href="#members">Members</a>
      </div>
      <div className="web-option">
        <a href="#expertise">
          <i class="fi-rr-laptop option-icon"></i>Areas of Expertise
        </a>
      </div>
      <div className="web-option">
        <a href="#clients"> Our Clients </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
