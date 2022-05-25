import React from 'react'
import './social-contact.css'
import {SocialData} from "../../Data/social"

function SocialContact() {
    const Data =SocialData;
  return (
    <div className='social-contact'>
        {
            Data.map((item)=>{
                return(
                    <a href={item.link}>
                        <div className='social-icon-div'>
                            <img src={item.icon} className="social-icon"/>
                </div>
                </a>
                );
            })}
        
    </div>
  );
}

export default SocialContact