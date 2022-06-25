import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            href="\files\Abhimanyu Sharma's Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <i class="icons fi fi-rr-document-signed" />
            <strong> Resume</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
