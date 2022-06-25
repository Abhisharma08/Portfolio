import React from "react";
import "./social-contact.css";
import { SocialData } from "../../Data/social";

function SocialContact() {
  const Data = SocialData;
  return (
    <div className="social-contact">
      {Data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img
                src={item.icon}
                className="social-icon"
                Alt="social site contact logo"
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
