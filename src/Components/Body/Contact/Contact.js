import React from "react";
import Separator from "../../common/separator";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bg">
      <Separator />
      <label className="section-title">Contact Us</label>
      <div className="contactSection">
        <div className="contact"><h3>Call Us @ 01874840033</h3></div>
        <div>
          <h3>
            ADDRESS
            <br />
            House # S-2 (4th Floor), <br />
            Avenue # 3, Block # D, <br />
            Banasree, Rampura, Dhaka – 1219.
            <br />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
