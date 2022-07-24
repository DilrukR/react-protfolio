import React from "react";
import "./about.css";
import ME from "../../Assest/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about_me'>
          <div className='about_me-img'>
            <img src={ME} alt='About me img' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experence</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Experence</h5>
              <small>3+ Years working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            maxime ratione quo maiores fugit ut dolores corrupti impedit
            repudiandae tempora voluptate repellendus qui veritatis, quis
            blanditiis voluptatibus perspiciatis corporis nam?
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
