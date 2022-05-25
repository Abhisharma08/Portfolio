import React from 'react'
import SocialContact from '../../common/social-contact/index.js'
import './about.css'
function About() {
  return (
    <div className='about'>
      <div className='about-top'>
      <div className='about-info'>
        Hello There 👋, I am 
        <br/> <span className='name-info'>Abhimanyu Sharma</span>. 
        <br/>I love experimenting with web.
      </div>
      <div className='about-img'>
      <img src={require('../../../assets/img.png')} className='img'/>
      </div>
      </div>
      <SocialContact/>
    </div>
  )
}

export default About