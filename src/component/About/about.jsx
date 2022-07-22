import React from "react";
import "./about.css";
import ME from "../../Assest/me-about.jpg";
import { FaAward } from "react-icons/fa";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about_me'></div>

        <div className='about__about_me_img'>
          <img src={ME} alt='About me img' />
        </div>

        <div className='about_content'>
          <div className='about_card'>
            <FaAward className='about_icon' />
            <h5>Experence</h5>
            <small>3+ Years working</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
