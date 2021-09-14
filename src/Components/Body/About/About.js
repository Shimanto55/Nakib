import React from "react";
import SocialContact from "../../common/social-contact/index";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, We are <br />
          <span className="info-name">Nakib & Associates</span>.<br /> We would Love to help you<br/> with any Legal services...
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png").default}
            className="picture"
            alt="sorry"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
