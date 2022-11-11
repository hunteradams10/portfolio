import React from "react";
import "./contact.css";
import Resume from "../file/hunter-tech-resume-amended.pdf";
import Skeleton from "../../img/skeleton.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Contact Me:</h1>
          <div className="contact-info-icon">
            <img src={Skeleton} alt="" className="c-icon" />
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-description">
            <div className="boundary-contact-box">
              <h2 className="contact-heading">Feel free to get in touch 😊</h2>
              <p className="link">
                <a className="resume" href={Resume} alt="" target="_blank" rel="noreferrer">
                  Click Here
                </a>{" "}
                to see my resume.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
